(function () {
  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function usableReference(reference) {
    return reference && Array.isArray(reference.formula) && reference.formula.length > 0;
  }

  function localReference(mix, prompt, lang) {
    const reference = data.generateRecipeReference(mix, prompt, lang);
    return {
      formula: reference.formula || [],
      note: reference.note || "",
      tip: "",
      limitations: []
    };
  }

  function renderReference(reference) {
    assistantResultEl.innerHTML = `
      <p class="field-label">${escapeHtml(t("assistantResult"))}</p>
      <ul>${reference.formula.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      <p class="assistant-note"><b>${escapeHtml(t("assistantNote"))}</b>${escapeHtml(reference.note || "")}</p>
      ${reference.tip ? `<p class="assistant-note">${escapeHtml(reference.tip)}</p>` : ""}
    `;
    assistantResultEl.hidden = false;
  }

  renderAssistantModal = function renderAssistantModalWithRemoteResult() {
    if (!activeAssistantMixId) return;
    const mix = data.eventMixes.find((item) => item.id === activeAssistantMixId);
    if (!mix) return;
    const lang = draft.lang || "zh";
    const state = assistantDrafts[mix.id] || { prompt: "", generated: false };
    const prompts = lang === "zh" ? mix.assistantPromptsZh : mix.assistantPromptsEn;
    $("#assistantQuick").innerHTML = prompts.map((prompt) => `
      <button type="button" data-assistant-prompt="${escapeHtml(prompt)}">${escapeHtml(prompt)}</button>
    `).join("");
    assistantPromptEl.value = state.prompt || "";
    assistantStatusEl.textContent = "";
    assistantStatusEl.classList.remove("error");
    assistantGenerateEl.disabled = false;
    assistantGenerateEl.textContent = t("assistantGenerate");
    document.querySelector(".assistant-close").setAttribute("aria-label", t("assistantClose"));
    document.querySelector(".assistant-backdrop").setAttribute("aria-label", t("assistantClose"));

    if (!state.generated || !state.prompt) {
      assistantResultEl.hidden = true;
      assistantResultEl.innerHTML = "";
      return;
    }

    const reference = usableReference(state.reference)
      ? state.reference
      : localReference(mix, state.prompt, lang);
    renderReference(reference);
  };

  generateAssistantReference = async function generateRemoteAssistantReference() {
    const mixId = activeAssistantMixId;
    const prompt = assistantPromptEl.value.trim();
    const mix = data.eventMixes.find((item) => item.id === mixId);
    const lang = draft.lang || "zh";

    if (!prompt) {
      assistantStatusEl.textContent = t("assistantNeedPrompt");
      assistantStatusEl.classList.add("error");
      return;
    }
    if (!mix) return;

    assistantDrafts[mixId] = { prompt, generated: false };
    saveAssistantDrafts();
    assistantStatusEl.textContent = t("assistantGenerating");
    assistantStatusEl.classList.remove("error");
    assistantGenerateEl.disabled = true;
    assistantGenerateEl.textContent = t("assistantGenerating");

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 7000);
    let reference;
    let source = "doubao";

    try {
      const response = await fetch("/.netlify/functions/recipe-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          sessionId: journey.clientId,
          mixId,
          language: lang,
          userPrompt: prompt,
          currentFormula: mix.formulas.zero[lang]
        })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok || !result.recipe || !Array.isArray(result.recipe.formula)) {
        const error = new Error(result.error || "AI request failed");
        error.code = result.error || "AI_REQUEST_FAILED";
        error.status = response.status;
        throw error;
      }

      reference = {
        formula: result.recipe.formula,
        note: result.recipe.adjustment || "",
        tip: result.recipe.tip || "",
        limitations: Array.isArray(result.recipe.limitations) ? result.recipe.limitations : []
      };
      if (!usableReference(reference)) throw new Error("INVALID_REMOTE_RECIPE");
    } catch (error) {
      source = "local-fallback";
      console.warn("AI recipe assistant fallback", {
        status: error.status || 0,
        code: error.code || error.name || "AI_REQUEST_FAILED"
      });
      reference = localReference(mix, prompt, lang);
    } finally {
      window.clearTimeout(timeout);
    }

    if (assistantDrafts[mixId]?.prompt !== prompt) return;
    assistantDrafts[mixId] = {
      prompt,
      generated: true,
      reference,
      source
    };
    saveAssistantDrafts();

    if (activeAssistantMixId === mixId) renderAssistantModal();
  };
})();
