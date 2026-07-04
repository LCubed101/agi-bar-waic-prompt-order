(function () {
  const copy = {
    zh: {
      tagline: "值得一见的人，总在 AGI Bar",
      headline: "Prompt 点酒",
      intro: "说一句、打一句，或点几个关键词，生成你的 WAIC 专属酒。端起酒杯，卸下防御，真实的社交才真正开始。",
      terminal: "一句话输入",
      placeholder: "比如：刚从 WAIC 出来，想喝一杯清爽、有上海感、适合聊天的酒。",
      generate: "生成我的酒",
      clear: "清空",
      back: "重新选择",
      resultLabel: "推荐结果",
      show: "给吧台看",
      another: "换一杯",
      listening: "正在听，你可以开始说。",
      speechUnsupported: "当前浏览器不支持语音输入，可以直接打字。",
      speechError: "没有听清，可以再试一次。",
      copied: "已生成，直接给吧台看。",
      completed: "已保存本次点单。",
      needInput: "先说一句、打一句，或选几个关键词。",
      complete: "已完成点单",
      summary: "今日汇总",
      summaryTitle: "今日汇总",
      exportOrders: "导出数据",
      topDrinks: "最多点的酒",
      topWords: "Prompt 高频词",
      recentOrders: "最近点单",
      noOrders: "还没有完成点单。",
      totalOrders: "已完成 {count} 单",
      clearSaved: "已清空当前输入。",
      noDrink: "还没有生成推荐酒。",
      noDrinkHint: "回到 Prompt 页，先生成一杯。",
      orderPrefix: "#",
      groupIdentity: "身份",
      groupMood: "心情",
      groupWant: "今晚想要",
      groupOccasion: "场景"
    },
    en: {
      tagline: "People Worth Meeting Are Always at AGI Bar",
      headline: "Prompt Your Pour",
      intro: "Speak, type, or tap a few keywords. AGI Bar will generate one drink for your WAIC night.",
      terminal: "one sentence in",
      placeholder: "Example: I just came from WAIC and want something refreshing, social, and Shanghai.",
      generate: "Prompt My Pour",
      clear: "Clear",
      back: "Choose Again",
      resultLabel: "Your drink",
      show: "Show to Bartender",
      another: "Try Another",
      listening: "Listening. Start speaking.",
      speechUnsupported: "Voice input is not available in this browser. Typing works.",
      speechError: "I did not catch that. Try again.",
      copied: "Ready. Show this to the bartender.",
      completed: "Order saved.",
      needInput: "Type, speak, or choose a few keywords first.",
      complete: "Order Completed",
      summary: "Today Summary",
      summaryTitle: "Today Summary",
      exportOrders: "Export CSV",
      topDrinks: "Most Ordered",
      topWords: "Top Prompt Words",
      recentOrders: "Recent Orders",
      noOrders: "No completed orders yet.",
      totalOrders: "{count} completed orders",
      clearSaved: "Current input cleared.",
      noDrink: "No drink generated yet.",
      noDrinkHint: "Go back to the prompt page first.",
      orderPrefix: "Order #",
      groupIdentity: "I am",
      groupMood: "Mood",
      groupWant: "I want",
      groupOccasion: "Occasion"
    }
  };

  const groups = [
    {
      key: "identity",
      title: "groupIdentity",
      options: [
        ["founder", "创始人", "Founder"],
        ["engineer", "工程师", "Engineer"],
        ["investor", "投资人", "Investor"],
        ["researcher", "研究员", "Researcher"],
        ["product", "产品人", "Product Person"],
        ["creator", "创作者", "Creator"],
        ["firstShanghai", "第一次来上海", "First time in Shanghai"],
        ["afterparty", "只是来 after party", "Just here for the after-party"]
      ]
    },
    {
      key: "mood",
      title: "groupMood",
      options: [
        ["relaxed", "松弛", "Relaxed"],
        ["curious", "好奇", "Curious"],
        ["social", "想认识人", "Social"],
        ["tired", "累但兴奋", "Tired but wired"],
        ["celebratory", "值得庆祝", "Celebratory"],
        ["courage", "需要一点勇气", "Need courage"],
        ["lowkey", "低调一点", "Low-key"],
        ["dangerous", "危险但优雅", "Dangerous but elegant"]
      ]
    },
    {
      key: "want",
      title: "groupWant",
      options: [
        ["refreshing", "清爽", "Something refreshing"],
        ["strong", "烈一点", "Something strong"],
        ["lowabv", "轻松一点", "Something low-alcohol"],
        ["photogenic", "适合拍照", "Something photogenic"],
        ["talk", "适合聊天", "Something easy to talk over"],
        ["surprising", "有惊喜", "Something surprising"],
        ["shanghai", "有上海感", "Something Shanghai"],
        ["foam", "像 AGI 泡沫", "Something like AGI Foam"]
      ]
    },
    {
      key: "occasion",
      title: "groupOccasion",
      options: [
        ["waic", "WAIC 之后", "After WAIC"],
        ["investors", "见投资人", "Meeting investors"],
        ["friends", "朋友叙旧", "Catching up with friends"],
        ["first", "今晚第一杯", "First drink of the night"],
        ["last", "离开前最后一杯", "Last drink before leaving"],
        ["networking", "不想尬聊", "Networking without small talk"],
        ["launch", "产品发布能量", "Product launch energy"],
        ["deep", "深度聊天", "Deep conversation"]
      ]
    }
  ];

  const drinks = [
    { id: 0, zh: "AGI：泡沫", en: "AGI Foam", base: "泡沫管够", flavorZh: ["轻盈", "好玩", "首杯"], flavorEn: ["light", "playful", "first round"], tags: ["foam", "photogenic", "first", "curious", "creator", "afterparty"], reasonZh: "致敬这个疯狂又迷人的时代，适合从第一句话开始破冰。", reasonEn: "A toast to this crazy and fascinating era, made for breaking the first layer of ice." },
    { id: 1, zh: "面壁：稳稳接住", en: "Wallfacer: Steady Catch", base: "气泡苹果汁", flavorZh: ["低负担", "清爽", "稳"], flavorEn: ["easy", "refreshing", "steady"], tags: ["lowabv", "refreshing", "relaxed", "tired", "talk", "researcher"], reasonZh: "不抢话、不压场，适合把高密度信息慢慢接住。", reasonEn: "Calm, clear, and easy to stay with when the room is dense with ideas." },
    { id: 2, zh: "马上安排", en: "On It", base: "西瓜西打", flavorZh: ["清甜", "果感", "行动派"], flavorEn: ["juicy", "bright", "action-ready"], tags: ["refreshing", "founder", "product", "launch", "celebratory", "first"], reasonZh: "适合刚结束会议、脑子还在跑、但今晚已经开始推进的人。", reasonEn: "For the person who left the conference and somehow already has a next step." },
    { id: 3, zh: "不兜圈子", en: "No Circles", base: "佛手香柚康普茶", flavorZh: ["柑橘", "利落", "醒脑"], flavorEn: ["citrus", "direct", "sharp"], tags: ["talk", "networking", "product", "engineer", "lowkey", "deep"], reasonZh: "适合想跳过寒暄，直接进入真正问题的人。", reasonEn: "For skipping the small talk and getting to the real question." },
    { id: 4, zh: "不玩套路", en: "No Tricks", base: "已尽调，正在补货", flavorZh: ["直白", "坦诚", "稀缺"], flavorEn: ["plain-spoken", "honest", "rare"], tags: ["investor", "lowkey", "deep", "courage"], reasonZh: "适合把话说清楚，也适合承认今晚不想再听 pitch。", reasonEn: "For saying things plainly, including that you have heard enough pitches tonight." },
    { id: 5, zh: "冲就对了", en: "Just Send It", base: "双倍 IPA", flavorZh: ["强烈", "苦香", "上头"], flavorEn: ["bold", "hoppy", "high-energy"], tags: ["strong", "courage", "celebratory", "founder", "launch", "dangerous"], reasonZh: "适合已经想好下一步，只差一点点胆量的人。", reasonEn: "For when the next move is clear and you only need a little more nerve." },
    { id: 6, zh: "直奔主题", en: "Straight to the Point", base: "草莓古斯", flavorZh: ["微酸", "莓果", "干净"], flavorEn: ["tart", "berry", "clean"], tags: ["talk", "networking", "social", "deep", "product", "investors"], reasonZh: "适合快速进入聊天，不浪费今晚任何一个值得一见的人。", reasonEn: "For getting straight into the conversation with someone worth meeting." },
    { id: 7, zh: "妥妥拿下", en: "Nailed It", base: "大米拉格", flavorZh: ["顺口", "干爽", "可靠"], flavorEn: ["crisp", "dry", "reliable"], tags: ["relaxed", "friends", "first", "lowkey", "engineer", "refreshing"], reasonZh: "不需要复杂理由，今晚这一杯就是稳。", reasonEn: "No complicated reasoning needed. This one simply works." },
    { id: 8, zh: "绝不糊弄", en: "No Fluff", base: "青提乌龙西打", flavorZh: ["茶感", "青提", "清醒"], flavorEn: ["oolong", "grape", "clear"], tags: ["refreshing", "researcher", "engineer", "lowabv", "tired", "waic"], reasonZh: "适合听了一天宏大叙事之后，来点清醒、诚实、好喝的。", reasonEn: "After a day of grand narratives, this stays clear, honest, and drinkable." },
    { id: 9, zh: "肯定没错", en: "Can’t Go Wrong", base: "澳红酸角", flavorZh: ["酸甜", "热带", "安心"], flavorEn: ["sweet-tart", "tropical", "safe bet"], tags: ["firstShanghai", "shanghai", "surprising", "friends", "last", "social"], reasonZh: "适合第一次来、还没决定今晚走向，但想先点对的人。", reasonEn: "For starting right when you do not yet know where the night is going." }
  ];

  const storageKeys = {
    orders: "agibar_waic_prompt_orders_v1",
    draft: "agibar_waic_prompt_draft_v1"
  };

  function normalize(text) {
    return String(text || "").toLowerCase();
  }

  function scoreDrink(drink, promptText, selected, lastDrinkId) {
    let score = 0;
    drink.tags.forEach((tag) => {
      if (selected.includes(tag)) score += 4;
    });

    const text = normalize(promptText);
    const signals = [
      [["清爽", "refresh", "爽", "冰", "fresh"], ["refreshing", "lowabv"], 3],
      [["烈", "strong", "bold", "勇气", "courage"], ["strong", "courage"], 4],
      [["投资", "investor", "钱", "融资"], ["investor", "investors"], 4],
      [["工程", "engineer", "代码", "debug"], ["engineer"], 3],
      [["创始", "founder", "创业"], ["founder"], 3],
      [["聊天", "talk", "social", "认识", "network"], ["talk", "social", "networking"], 4],
      [["上海", "shanghai"], ["shanghai", "firstShanghai"], 4],
      [["拍照", "photo", "好看"], ["photogenic"], 3],
      [["累", "tired", "wired"], ["tired"], 3],
      [["庆祝", "celebrate", "cheers"], ["celebratory"], 3],
      [["直接", "主题", "straight", "direct"], ["talk", "networking"], 3],
      [["泡沫", "foam", "agi"], ["foam"], 4]
    ];

    signals.forEach(([words, tags, points]) => {
      if (words.some((word) => text.includes(word))) {
        tags.forEach((tag) => {
          if (drink.tags.includes(tag)) score += points;
        });
      }
    });

    if (drink.id === lastDrinkId) score -= 8;
    score += Math.sin((drink.id + 1) * 17 + selected.length * 3 + text.length) * 0.65;
    return score;
  }

  function chooseDrink(draft) {
    const selected = draft.selected || [];
    return drinks
      .map((drink) => ({ drink, score: scoreDrink(drink, draft.prompt || "", selected, draft.lastDrinkId) }))
      .sort((a, b) => b.score - a.score)[0].drink;
  }

  function loadDraft() {
    try {
      return JSON.parse(localStorage.getItem(storageKeys.draft) || "null") || {
        prompt: "",
        selected: [],
        lang: "zh",
        currentDrinkId: null,
        lastDrinkId: null
      };
    } catch {
      localStorage.removeItem(storageKeys.draft);
      return { prompt: "", selected: [], lang: "zh", currentDrinkId: null, lastDrinkId: null };
    }
  }

  function saveDraft(draft) {
    localStorage.setItem(storageKeys.draft, JSON.stringify(draft));
  }

  function loadOrders() {
    try {
      return JSON.parse(localStorage.getItem(storageKeys.orders) || "[]");
    } catch {
      return [];
    }
  }

  function saveOrders(orders) {
    localStorage.setItem(storageKeys.orders, JSON.stringify(orders));
  }

  function getChipLabel(value, targetLang) {
    for (const group of groups) {
      const option = group.options.find(([key]) => key === value);
      if (option) return targetLang === "zh" ? option[1] : option[2];
    }
    return value;
  }

  function countBy(items, getKey) {
    const map = new Map();
    items.forEach((item) => {
      const key = getKey(item);
      if (!key) return;
      map.set(key, (map.get(key) || 0) + 1);
    });
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }

  function extractWords(orders) {
    const stop = new Set([
      "the", "and", "for", "with", "want", "something", "from", "just", "came", "after", "one", "drink",
      "想", "要", "一杯", "一个", "适合", "刚", "出来", "今晚", "今天", "可以", "需要", "比较", "有点"
    ]);
    return orders.flatMap((order) => {
      const text = `${order.prompt || ""} ${order.selected.map((item) => `${item.zh} ${item.en}`).join(" ")}`;
      const enWords = text.toLowerCase().match(/[a-z][a-z-]{2,}/g) || [];
      const zhWords = text.match(/[\u4e00-\u9fff]{2,}/g) || [];
      return [...enWords, ...zhWords].filter((word) => !stop.has(word));
    });
  }

  function csvCell(value) {
    return `"${String(value ?? "").replaceAll('"', '""')}"`;
  }

  window.AGIBarData = {
    copy,
    groups,
    drinks,
    storageKeys,
    chooseDrink,
    loadDraft,
    saveDraft,
    loadOrders,
    saveOrders,
    getChipLabel,
    countBy,
    extractWords,
    csvCell
  };
})();
