(function () {
  const copy = {
    zh: {
      tagline: "值得一见的人，总在 AGI Bar",
      headline: "Prompt 点单",
      intro: "看不懂菜单也没关系。写一句，或点几个关键词，生成今晚的点单；也可以进配方实验室，调一杯自己的版本。",
      terminal: "一句话输入",
      placeholder: "比如：刚到现场，想要一杯清爽、适合聊天、不要太重的。",
      generate: "生成我的点单",
      clear: "清空",
      back: "重新选择",
      resultLabel: "推荐结果",
      show: "给吧台看",
      another: "换一杯",
      copied: "已生成，直接给吧台看。",
      completed: "已保存本次点单。",
      needInput: "先写一句、打一句，或选几个关键词。",
      complete: "已完成点单",
      summary: "今日汇总",
      summaryTitle: "今日汇总",
      exportOrders: "导出数据",
      topDrinks: "最多点的单",
      topWords: "Prompt 高频词",
      recentOrders: "最近点单",
      noOrders: "还没有完成点单。",
      totalOrders: "已完成 {count} 单",
      clearSaved: "已清空当前输入。",
      noDrink: "还没有生成推荐。",
      noDrinkHint: "回到 Prompt 页，先生成一杯。",
      orderPrefix: "#",
      groupIdentity: "身份",
      groupMood: "心情",
      groupWant: "今晚想要",
      groupOccasion: "场景",
      tabOrder: "点单",
      tabLab: "配方实验室",
      labHeadline: "配方实验室",
      labIntro: "三款活动限定特调不直接公布名字。先看口味和场景，选无醇或含醇，再生成你的专属名称。",
      labTerminal: "选择一款",
      labNoAlcohol: "无醇",
      labWithAlcohol: "含醇",
      labFlavor: "口味",
      labScene: "适合",
      labFormula: "配方",
      labRatio: "比例",
      labName: "专属名称",
      labGenerate: "生成名称",
      labShow: "给吧台看",
      labOrderPrefix: "编号 ",
      labSaved: "已生成，直接给吧台看编号。"
    },
    en: {
      tagline: "People Worth Meeting Are Always at AGI Bar",
      headline: "Prompt Your Order",
      intro: "No need to decode the menu. Type a sentence or tap a few keywords, then get one clear order for tonight.",
      terminal: "one sentence in",
      placeholder: "Example: I just arrived and want something refreshing, social, and not too heavy.",
      generate: "Prompt My Order",
      clear: "Clear",
      back: "Choose Again",
      resultLabel: "Your drink",
      show: "Show to Bartender",
      another: "Try Another",
      copied: "Ready. Show this to the bartender.",
      completed: "Order saved.",
      needInput: "Type or choose a few keywords first.",
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
      groupOccasion: "Occasion",
      tabOrder: "Order",
      tabLab: "Recipe Lab",
      labHeadline: "Recipe Lab",
      labIntro: "Three event-only mixes stay unnamed on the sign. Pick a profile, choose no alcohol or with alcohol, then generate your own name.",
      labTerminal: "choose one",
      labNoAlcohol: "No alcohol",
      labWithAlcohol: "With alcohol",
      labFlavor: "Profile",
      labScene: "Best for",
      labFormula: "Formula",
      labRatio: "Ratio",
      labName: "Generated name",
      labGenerate: "Generate Name",
      labShow: "Show to Bar",
      labOrderPrefix: "Code ",
      labSaved: "Ready. Show this code to the bar."
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
        ["lowabv", "无醇", "No alcohol"],
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
        ["waic", "到场之后", "After arrival"],
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

  const eventMixes = [
    {
      id: "A",
      hintZh: "刚充值，下一秒免费",
      hintEn: "You subscribed. Then it became free.",
      colorZh: "蓝白渐变",
      colorEn: "blue-white gradient",
      flavorZh: ["清爽", "气泡", "椰子水", "柠檬"],
      flavorEn: ["refreshing", "sparkling", "coconut water", "lemon"],
      sceneZh: "适合刚到场、想轻松开场的人。",
      sceneEn: "For arriving, easing in, and starting light.",
      formulas: {
        zero: {
          zh: ["蓝柑糖浆 5-15ml", "椰子水 30ml", "气泡水或雪碧补满", "柠檬片"],
          en: ["Blue curacao syrup 5-15ml", "Coconut water 30ml", "Top with soda or Sprite", "Lemon slice"]
        },
        alcohol: {
          zh: ["蓝柑糖浆 5-15ml", "起泡 30ml", "气泡水或雪碧补满", "柠檬片"],
          en: ["Blue curacao syrup 5-15ml", "Sparkling base 30ml", "Top with soda or Sprite", "Lemon slice"]
        }
      },
      ratios: [
        { value: "light", zh: "更轻：蓝柑 5ml", en: "lighter: syrup 5ml" },
        { value: "standard", zh: "标准：蓝柑 10ml", en: "standard: syrup 10ml" },
        { value: "sweet", zh: "更甜：蓝柑 15ml", en: "sweeter: syrup 15ml" }
      ],
      nameBitsZh: ["等等", "免费", "蓝屏", "胜利", "续费", "泡泡"],
      nameBitsEn: ["Waitlist", "Free", "Blue", "Victory", "Renewal", "Bubble"]
    },
    {
      id: "B",
      hintZh: "能力涨了，账单也醒了",
      hintEn: "The model got stronger. The bill woke up.",
      colorZh: "粉底蓝顶分层",
      colorEn: "pink base, blue top",
      flavorZh: ["芭乐青提", "苏打", "柠檬", "分层"],
      flavorEn: ["guava grape", "soda", "lemon", "layered"],
      sceneZh: "适合想要视觉记忆点、正在社交的人。",
      sceneEn: "For a visual hook and active conversations.",
      formulas: {
        zero: {
          zh: ["芭乐青提 90ml", "满冰", "苏打水 90ml + 蓝柑少量混合", "柠檬汁 5ml", "蓝色层缓慢倒满"],
          en: ["Guava grape 90ml", "Full ice", "Soda 90ml with a small blue syrup mix", "Lemon juice 5ml", "Slow-pour the blue layer"]
        },
        alcohol: {
          zh: ["芭乐青提 90ml", "满冰", "含醇蓝色层由吧台处理", "柠檬汁 5ml", "蓝色层缓慢倒满"],
          en: ["Guava grape 90ml", "Full ice", "Bar-prepped blue layer", "Lemon juice 5ml", "Slow-pour the blue layer"]
        }
      },
      ratios: [
        { value: "fresh", zh: "更酸：柠檬 8ml", en: "brighter: lemon 8ml" },
        { value: "standard", zh: "标准：柠檬 5ml", en: "standard: lemon 5ml" },
        { value: "visual", zh: "更分层：蓝色层慢倒", en: "more layered: slower blue pour" }
      ],
      nameBitsZh: ["账单", "刺痛", "粉蓝", "沉默", "暴击", "额度"],
      nameBitsEn: ["Invoice", "Sting", "Pink Blue", "Silence", "Critical", "Quota"]
    },
    {
      id: "C",
      hintZh: "没中签，也要有上岸的仪式感",
      hintEn: "No allocation, still a landing ritual.",
      colorZh: "琥珀金",
      colorEn: "amber gold",
      flavorZh: ["菠萝", "苏打", "咖啡", "冰感"],
      flavorEn: ["pineapple", "soda", "coffee", "ice"],
      sceneZh: "适合庆祝、收尾，或想要更强记忆点的人。",
      sceneEn: "For celebration, closing the night, or a stronger finish.",
      formulas: {
        zero: {
          zh: ["100% 菠萝汁 40ml", "满杯老冰块", "冰镇含糖苏打水补足", "浓缩咖啡液 40ml 慢倒"],
          en: ["100% pineapple juice 40ml", "Full old ice", "Top with chilled sweet soda", "Slow-pour espresso 40ml"]
        },
        alcohol: {
          zh: ["菠萝汁 40ml", "满杯老冰块", "含醇版本由吧台确认", "浓缩咖啡液 40ml 慢倒"],
          en: ["Pineapple juice 40ml", "Full old ice", "Bar-confirmed alcohol version", "Slow-pour espresso 40ml"]
        }
      },
      ratios: [
        { value: "bright", zh: "更亮：菠萝更多", en: "brighter: more pineapple" },
        { value: "standard", zh: "标准：菠萝 40ml", en: "standard: pineapple 40ml" },
        { value: "deep", zh: "更深：咖啡更重", en: "deeper: more coffee" }
      ],
      nameBitsZh: ["上岸", "金线", "心跳", "浮盈", "翻倍", "琥珀"],
      nameBitsEn: ["Landing", "Goldline", "Heartbeat", "Profit", "Double", "Amber"]
    }
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
      [["无醇", "低度", "不含", "no alcohol", "non-alcohol", "nonalcoholic"], ["lowabv", "refreshing"], 5],
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

  function generateMixName(mix, lang, ratioValue, variant, spin = 0) {
    const bits = lang === "zh" ? mix.nameBitsZh : mix.nameBitsEn;
    const ratioIndex = mix.ratios.findIndex((item) => item.value === ratioValue);
    const offset = variant === "alcohol" ? 2 : 0;
    const first = bits[(ratioIndex + offset + spin + bits.length) % bits.length];
    const second = bits[(ratioIndex + offset + spin + 3 + bits.length) % bits.length];
    return lang === "zh" ? `${first}${second}` : `${first} ${second}`;
  }

  window.AGIBarData = {
    copy,
    groups,
    drinks,
    eventMixes,
    storageKeys,
    chooseDrink,
    loadDraft,
    saveDraft,
    loadOrders,
    saveOrders,
    getChipLabel,
    countBy,
    extractWords,
    csvCell,
    generateMixName
  };
})();
