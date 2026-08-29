const crypto = require("crypto");

const MAX_IMAGE_BYTES = 1800000;
const MAX_ATTEMPTS = 10;

class GitHubError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify(body)
  };
}

function cleanText(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function cleanFormula(value) {
  if (!Array.isArray(value)) return [];
  return value.slice(0, 12).map((item) => cleanText(item, 160)).filter(Boolean);
}

function branchPath(branch) {
  return branch.split("/").map(encodeURIComponent).join("/");
}

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function githubRequest(repository, token, path, options = {}) {
  const response = await fetch(`https://api.github.com/repos/${repository}${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "agi-bar-prompt-order",
      ...(options.headers || {})
    }
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new GitHubError(response.status, payload.message || `GitHub request failed: ${response.status}`);
  }
  return payload;
}

async function createBlob(repository, token, content) {
  return githubRequest(repository, token, "/git/blobs", {
    method: "POST",
    body: JSON.stringify({ content, encoding: "base64" })
  });
}

async function commitSubmission({ repository, token, branch, entries, message }) {
  const encodedBranch = branchPath(branch);
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    const reference = await githubRequest(repository, token, `/git/ref/heads/${encodedBranch}`);
    const parentSha = reference.object.sha;
    const parentCommit = await githubRequest(repository, token, `/git/commits/${parentSha}`);
    const tree = await githubRequest(repository, token, "/git/trees", {
      method: "POST",
      body: JSON.stringify({ base_tree: parentCommit.tree.sha, tree: entries })
    });
    const commit = await githubRequest(repository, token, "/git/commits", {
      method: "POST",
      body: JSON.stringify({ message, tree: tree.sha, parents: [parentSha] })
    });

    try {
      await githubRequest(repository, token, `/git/refs/heads/${encodedBranch}`, {
        method: "PATCH",
        body: JSON.stringify({ sha: commit.sha, force: false })
      });
      return commit.sha;
    } catch (error) {
      if (!(error instanceof GitHubError) || ![409, 422].includes(error.status) || attempt === MAX_ATTEMPTS - 1) {
        throw error;
      }
      await delay(90 + Math.round(Math.random() * 180) + attempt * 70);
    }
  }
  throw new Error("Could not update GitHub after concurrent submissions");
}

exports.handler = async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod !== "POST") return json(405, { ok: false, error: "METHOD_NOT_ALLOWED" });

  const token = process.env.GITHUB_SUBMISSIONS_TOKEN;
  const repository = process.env.GITHUB_SUBMISSIONS_REPOSITORY;
  const branch = process.env.GITHUB_SUBMISSIONS_BRANCH || "main";
  if (!token || !repository) {
    console.error("UPLOAD_NOT_CONFIGURED", {
      tokenConfigured: Boolean(token),
      repositoryConfigured: Boolean(repository),
      branch
    });
    return json(503, { ok: false, error: "UPLOAD_NOT_CONFIGURED" });
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { ok: false, error: "INVALID_JSON" });
  }

  const mixId = cleanText(body.mixId, 1).toUpperCase();
  const clientId = cleanText(body.clientId, 100);
  const imageMime = cleanText(body.imageMime, 40).toLowerCase();
  const imageBase64 = cleanText(body.imageBase64, 2600000);
  if (!["A", "B", "C"].includes(mixId) || !clientId) {
    return json(400, { ok: false, error: "INVALID_SUBMISSION" });
  }
  if (!["image/jpeg", "image/png", "image/webp"].includes(imageMime) || !imageBase64) {
    return json(400, { ok: false, error: "INVALID_IMAGE" });
  }

  let imageBuffer;
  try {
    imageBuffer = Buffer.from(imageBase64, "base64");
  } catch {
    return json(400, { ok: false, error: "INVALID_IMAGE" });
  }
  if (!imageBuffer.length || imageBuffer.length > MAX_IMAGE_BYTES) {
    return json(413, { ok: false, error: "IMAGE_TOO_LARGE" });
  }

  const extension = imageMime === "image/png" ? "png" : imageMime === "image/webp" ? "webp" : "jpg";
  const submissionId = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const dateParts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date()).reduce((parts, part) => ({ ...parts, [part.type]: part.value }), {});
  const dateFolder = `${dateParts.year}-${dateParts.month}-${dateParts.day}`;
  const basePath = `submissions/${dateFolder}/${submissionId}`;
  const imagePath = `${basePath}/photo.${extension}`;
  const metadataPath = `${basePath}/submission.json`;
  const participantId = crypto.createHash("sha256").update(clientId).digest("hex").slice(0, 16);
  const metadata = {
    submissionId,
    createdAt,
    participantId,
    mixId,
    language: cleanText(body.language, 8),
    note: cleanText(body.note, 1200),
    assistantPrompt: cleanText(body.assistantPrompt, 800),
    formula: cleanFormula(body.formula),
    imagePath,
    source: "prompt-order"
  };

  try {
    const [imageBlob, metadataBlob] = await Promise.all([
      createBlob(repository, token, imageBuffer.toString("base64")),
      createBlob(repository, token, Buffer.from(`${JSON.stringify(metadata, null, 2)}\n`).toString("base64"))
    ]);
    const commitSha = await commitSubmission({
      repository,
      token,
      branch,
      message: `Add recipe submission ${mixId} ${submissionId.slice(0, 8)}`,
      entries: [
        { path: imagePath, mode: "100644", type: "blob", sha: imageBlob.sha },
        { path: metadataPath, mode: "100644", type: "blob", sha: metadataBlob.sha }
      ]
    });
    return json(200, { ok: true, submissionId, commitSha });
  } catch (error) {
    console.error("GITHUB_UPLOAD_FAILED", {
      status: error.status || 0,
      message: error.message || "Unknown GitHub error",
      repository,
      branch
    });
    return json(502, { ok: false, error: "GITHUB_UPLOAD_FAILED" });
  }
};
