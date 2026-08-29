(function () {
  const copy = {
    zh: {
      tagline: "值得一见的人，总在 AGI Bar",
      headline: "prompt-order",
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
      labIntro: "三款活动限定特调先不命名。先看口味和配方，三款都是无醇；想要含醇可自行 DIY。",
      labTerminal: "选择一款",
      labFlavor: "口味",
      labFormula: "配方",
      labDiy: "DIY",
      assistantOpen: "AI 配方助手",
      assistantTitle: "AI 配方助手",
      assistantIntro: "说一句你想怎么调整，我给你一份当前配方参考。",
      assistantPlaceholder: "比如：少甜一点，气泡更足。",
      assistantGenerate: "生成配方参考",
      assistantGenerating: "生成中…",
      assistantNeedPrompt: "先写一句你想怎么调整。",
      assistantResult: "配方参考",
      assistantNote: "调整建议",
      assistantClose: "关闭",
      assistantDisclaimer: "仅供现场调整参考，实际以现有原料为准。",
      mixChoose: "切换配方",
      diyUploadTitle: "上传你的 DIY",
      diyUploadIntro: "没有完全照着配方也没关系，留下这次版本。",
      diyTakePhoto: "直接拍照",
      diyChoosePhoto: "从相册选择",
      diyRetakePhoto: "重新拍照",
      diyReplacePhoto: "更换图片",
      diyNoteLabel: "你做了什么调整？",
      diyNotePlaceholder: "比如：蓝柑减半，多加气泡，最后放了一片柠檬。",
      diySubmit: "提交我的版本",
      diySubmitting: "提交中…",
      diyNeedPhoto: "先选择一张完成后的图片。",
      diySavedLocal: "图片和描述已保存在这台设备。",
      diySubmitted: "已提交",
      diySubmitError: "提交没有完成，进度已保存在本机，请稍后再试。",
      diyPhotoAlt: "本次 DIY 图片",
      diyImageError: "这张图片无法读取，请换一张。"
    },
    en: {
      tagline: "People Worth Meeting Are Always at AGI Bar",
      headline: "prompt-order",
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
      labIntro: "Three event-only mixes stay unnamed for now. Start with flavor and formula. All three are no alcohol; add your own DIY twist if you want.",
      labTerminal: "choose one",
      labFlavor: "Profile",
      labFormula: "Formula",
      labDiy: "DIY",
      assistantOpen: "AI Recipe Assistant",
      assistantTitle: "AI Recipe Assistant",
      assistantIntro: "Describe the adjustment you want and get a reference for this recipe.",
      assistantPlaceholder: "Example: less sweet, with more sparkle.",
      assistantGenerate: "Generate Reference",
      assistantGenerating: "Generating…",
      assistantNeedPrompt: "Describe the adjustment first.",
      assistantResult: "Recipe reference",
      assistantNote: "Adjustment note",
      assistantClose: "Close",
      assistantDisclaimer: "For on-site reference only. Use the ingredients available at the bar.",
      mixChoose: "Switch recipe",
      diyUploadTitle: "Upload Your DIY",
      diyUploadIntro: "Went off-recipe? Keep a record of the version you made.",
      diyTakePhoto: "Take Photo",
      diyChoosePhoto: "Photo Library",
      diyRetakePhoto: "Retake Photo",
      diyReplacePhoto: "Replace Photo",
      diyNoteLabel: "What did you change?",
      diyNotePlaceholder: "Example: half the blue syrup, more soda, lemon slice to finish.",
      diySubmit: "Submit My Version",
      diySubmitting: "Submitting…",
      diyNeedPhoto: "Choose a finished photo first.",
      diySavedLocal: "The photo and notes are saved on this device.",
      diySubmitted: "Submitted",
      diySubmitError: "Submission did not finish. Your progress is saved on this device; try again later.",
      diyPhotoAlt: "DIY result photo",
      diyImageError: "This image could not be read. Choose another one."
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
        ["arrival", "到场之后", "After arrival"],
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
    { id: 0, zh: "AGI", en: "AGI", base: "只有泡沫", baseEn: "Foam only", abv: "5.0%", flavorZh: ["泡沫", "轻盈", "首杯"], flavorEn: ["foam", "light", "first round"], tags: ["foam", "photogenic", "first", "curious", "creator", "afterparty"], reasonZh: "致敬这个疯狂又迷人的时代，适合从第一句话开始破冰。", reasonEn: "A toast to this crazy and fascinating era, made for breaking the first layer of ice." },
    { id: 1, zh: "稳稳接住", en: "Steady Catch", base: "气泡维纳斯苹果汁", baseEn: "Sparkling Venus apple juice", abv: "无醇", flavorZh: ["无醇", "苹果", "清爽"], flavorEn: ["no alcohol", "apple", "refreshing"], tags: ["lowabv", "refreshing", "relaxed", "tired", "talk", "researcher"], reasonZh: "不抢话、不压场，适合把高密度信息慢慢接住。", reasonEn: "Calm, clear, and easy to stay with when the room is dense with ideas." },
    { id: 2, zh: "马上安排", en: "On It", base: "杨桃芭乐康普茶", baseEn: "Starfruit guava kombucha", abv: "无醇", flavorZh: ["无醇", "果感", "行动派"], flavorEn: ["no alcohol", "fruity", "action-ready"], tags: ["lowabv", "refreshing", "founder", "product", "launch", "celebratory", "first"], reasonZh: "适合刚结束会议、脑子还在跑、但今晚已经开始推进的人。", reasonEn: "For the person who left the conference and somehow already has a next step." },
    { id: 3, zh: "不兜圈子", en: "No Circles", base: "西瓜西打", baseEn: "Watermelon cider", abv: "3.7%", flavorZh: ["西瓜", "利落", "轻松"], flavorEn: ["watermelon", "direct", "easy"], tags: ["talk", "networking", "product", "engineer", "lowkey", "deep", "refreshing"], reasonZh: "适合想跳过寒暄，直接进入真正问题的人。", reasonEn: "For skipping the small talk and getting to the real question." },
    { id: 4, zh: "不玩套路", en: "No Tricks", base: "超干爽皮尔森", baseEn: "Extra dry pilsner", abv: "5.2%", flavorZh: ["干爽", "直白", "利落"], flavorEn: ["dry", "plain-spoken", "crisp"], tags: ["investor", "lowkey", "deep", "courage", "refreshing"], reasonZh: "适合把话说清楚，也适合承认今晚不想再听 pitch。", reasonEn: "For saying things plainly, including that you have heard enough pitches tonight." },
    { id: 5, zh: "冲就对了", en: "Just Send It", base: "草莓古斯", baseEn: "Strawberry gose", abv: "3.2%", flavorZh: ["草莓", "微酸", "上头"], flavorEn: ["strawberry", "tart", "high-energy"], tags: ["strong", "courage", "celebratory", "founder", "launch", "dangerous"], reasonZh: "适合已经想好下一步，只差一点点胆量的人。", reasonEn: "For when the next move is clear and you only need a little more nerve." },
    { id: 6, zh: "直奔主题", en: "Straight to the Point", base: "三倍 IPA", baseEn: "Triple IPA", abv: "7.8%", flavorZh: ["强烈", "苦香", "直接"], flavorEn: ["bold", "hoppy", "direct"], tags: ["strong", "talk", "networking", "social", "deep", "product", "investors"], reasonZh: "适合快速进入聊天，不浪费今晚任何一个值得一见的人。", reasonEn: "For getting straight into the conversation with someone worth meeting." },
    { id: 7, zh: "妥妥拿下", en: "Nailed It", base: "大米拉格", baseEn: "Rice lager", abv: "5.4%", flavorZh: ["顺口", "干爽", "可靠"], flavorEn: ["crisp", "dry", "reliable"], tags: ["relaxed", "friends", "first", "lowkey", "engineer", "refreshing"], reasonZh: "不需要复杂理由，今晚这一杯就是稳。", reasonEn: "No complicated reasoning needed. This one simply works." },
    { id: 8, zh: "绝不糊弄", en: "No Fluff", base: "青提乌龙西打", baseEn: "Grape oolong cider", abv: "3.3%", flavorZh: ["青提", "乌龙", "清醒"], flavorEn: ["grape", "oolong", "clear"], tags: ["refreshing", "researcher", "engineer", "tired", "arrival"], reasonZh: "适合听了一天宏大叙事之后，来点清醒、诚实、好喝的。", reasonEn: "After a day of grand narratives, this stays clear, honest, and drinkable." },
    { id: 9, zh: "肯定没错", en: "Can’t Go Wrong", base: "已卖爆，正在补货", baseEn: "Sold out, restocking", abv: "OUT", soldOut: true, flavorZh: ["售罄", "补货中", "安心"], flavorEn: ["sold out", "restocking", "safe bet"], tags: ["firstShanghai", "shanghai", "surprising", "friends", "last", "social"], reasonZh: "这款目前已卖爆，现场先换一款更稳。", reasonEn: "This one is sold out for now, so pick another reliable option." }
  ];

  const eventMixes = [
    {
      id: "A",
      image: "special-visual-A.png",
      colorZh: "蓝白渐变",
      colorEn: "blue-white gradient",
      flavorZh: ["清爽", "气泡", "椰子水", "柠檬"],
      flavorEn: ["refreshing", "sparkling", "coconut water", "lemon"],
      sceneZh: "适合刚到场、想轻松开场的人。",
      sceneEn: "For arriving, easing in, and starting light.",
      formulas: {
        zero: {
          zh: ["蓝柑糖浆 5-15ml", "椰子水 30ml", "气泡水/雪碧倒满", "柠檬片", "用长柄搅拌勺轻轻搅拌", "用吸管饮用"],
          en: ["Blue curacao syrup 5-15ml", "Coconut water 30ml", "Top with soda or Sprite", "Lemon slice", "Stir gently with a long bar spoon", "Drink with a straw"]
        },
        alcohol: {
          zh: ["蓝柑糖浆 5-15ml", "起泡酒 30ml", "气泡水/雪碧倒满", "柠檬片", "用长柄搅拌勺轻轻搅拌", "用吸管饮用"],
          en: ["Blue curacao syrup 5-15ml", "Sparkling wine 30ml", "Top with soda or Sprite", "Lemon slice", "Stir gently with a long bar spoon", "Drink with a straw"]
        }
      },
      diyZh: "如需含醇，请在无醇版本基础上自行 DIY。",
      diyEn: "No alcohol by default. Add your own DIY twist if preferred.",
      ratios: [
        { value: "light", zh: "更轻：蓝柑 5ml", en: "lighter: syrup 5ml" },
        { value: "standard", zh: "标准：蓝柑 10ml", en: "standard: syrup 10ml" },
        { value: "sweet", zh: "更甜：蓝柑 15ml", en: "sweeter: syrup 15ml" }
      ],
      assistantPromptsZh: ["少甜一点", "更清爽", "无酒精", "有酒精"],
      assistantPromptsEn: ["Less sweet", "More refreshing", "No alcohol", "With alcohol"],
      nameBitsZh: ["等等", "免费", "蓝屏", "胜利", "续费", "泡泡"],
      nameBitsEn: ["Waitlist", "Free", "Blue", "Victory", "Renewal", "Bubble"]
    },
    {
      id: "B",
      image: "special-visual-B.png",
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
          zh: ["无醇出品为基础", "满冰", "如需含醇，自行 DIY 加少量基底", "柠檬汁 5ml", "蓝色层缓慢倒满"],
          en: ["Start from the no alcohol serve", "Full ice", "DIY add a small base if wanted", "Lemon juice 5ml", "Slow-pour the blue layer"]
        }
      },
      diyZh: "如需含醇，请在无醇版本基础上自行 DIY。",
      diyEn: "No alcohol by default. Add your own DIY twist if preferred.",
      ratios: [
        { value: "fresh", zh: "更酸：柠檬 8ml", en: "brighter: lemon 8ml" },
        { value: "standard", zh: "标准：柠檬 5ml", en: "standard: lemon 5ml" },
        { value: "visual", zh: "更分层：蓝色层慢倒", en: "more layered: slower blue pour" }
      ],
      assistantPromptsZh: ["更酸一点", "少甜一点", "分层明显", "含醇 DIY"],
      assistantPromptsEn: ["More tart", "Less sweet", "Stronger layers", "Alcohol DIY"],
      nameBitsZh: ["账单", "刺痛", "粉蓝", "沉默", "暴击", "额度"],
      nameBitsEn: ["Invoice", "Sting", "Pink Blue", "Silence", "Critical", "Quota"]
    },
    {
      id: "C",
      image: "special-visual-C.png",
      colorZh: "琥珀金",
      colorEn: "amber gold",
      flavorZh: ["苹果", "苏打", "咖啡", "冰感"],
      flavorEn: ["apple", "soda", "coffee", "ice"],
      sceneZh: "适合庆祝、收尾，或想要更强记忆点的人。",
      sceneEn: "For celebration, closing the night, or a stronger finish.",
      formulas: {
        zero: {
          zh: ["苹果汁 20ml", "满杯冰块", "苏打水/起泡水补足", "浓缩咖啡液 40ml 慢倒"],
          en: ["Apple juice 20ml", "Fill the cup with ice", "Top with soda or sparkling water", "Slow-pour espresso 40ml"]
        },
        alcohol: {
          zh: ["苹果汁 20ml", "满杯冰块", "苏打水/起泡水补足", "浓缩咖啡液 40ml 慢倒", "如需含醇，仅使用现场确认的基底少量 DIY"],
          en: ["Apple juice 20ml", "Fill the cup with ice", "Top with soda or sparkling water", "Slow-pour espresso 40ml", "For alcohol, add only a small amount of a confirmed on-site base"]
        }
      },
      diyZh: "如需含醇，请在无醇版本基础上自行 DIY。",
      diyEn: "No alcohol by default. Add your own DIY twist if preferred.",
      ratios: [
        { value: "bright", zh: "更亮：苹果更多", en: "brighter: more apple" },
        { value: "standard", zh: "标准：苹果 20ml", en: "standard: apple 20ml" },
        { value: "deep", zh: "更深：咖啡更重", en: "deeper: more coffee" }
      ],
      assistantPromptsZh: ["咖啡更浓", "苹果明显", "少甜一点", "含醇 DIY"],
      assistantPromptsEn: ["More coffee", "More apple", "Less sweet", "Alcohol DIY"],
      nameBitsZh: ["上岸", "金线", "心跳", "浮盈", "翻倍", "琥珀"],
      nameBitsEn: ["Landing", "Goldline", "Heartbeat", "Profit", "Double", "Amber"]
    }
  ];

  const storageKeys = {
    orders: "agibar_prompt_order_orders_v2",
    draft: "agibar_prompt_order_draft_v2"
  };

  function normalize(text) {
    return String(text || "").toLowerCase();
  }

  function scoreDrink(drink, promptText, selected, lastDrinkId) {
    if (drink.soldOut) return Number.NEGATIVE_INFINITY;
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
      .filter((drink) => !drink.soldOut)
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

  function generateRecipeReference(mix, prompt, lang) {
    const text = normalize(prompt);
    const has = (...words) => words.some((word) => text.includes(word));
    let mode = "standard";

    if (has("含醇", "有酒精", "加醇", "with alcohol", "boozy")) mode = "alcohol";
    else if (has("无酒精", "无醇", "no alcohol", "non-alcohol")) mode = "standard";
    else if (has("少甜", "不甜", "低糖", "less sweet", "not sweet")) mode = "lessSweet";
    else if (has("酸", "柠檬", "tart", "sour", "lemon")) mode = "tart";
    else if (has("气泡", "苏打", "sparkle", "sparkling", "soda")) mode = "sparkling";
    else if (has("分层", "层次", "layer")) mode = "layered";
    else if (has("咖啡", "浓缩", "coffee", "espresso")) mode = "coffee";
    else if (has("苹果", "果味", "apple", "fruit")) mode = "fruit";
    else if (has("清爽", "轻", "refresh", "light")) mode = "light";

    const variants = {
      A: {
        lessSweet: {
          zh: ["蓝柑糖浆 5ml", "椰子水 30ml", "气泡水/雪碧倒满", "柠檬片", "用长柄搅拌勺轻轻搅拌", "用吸管饮用"],
          en: ["Blue syrup 5ml", "Coconut water 30ml", "Top with soda or Sprite", "Lemon slice", "Stir gently with a long bar spoon", "Drink with a straw"]
        },
        tart: {
          zh: ["蓝柑糖浆 8ml", "椰子水 30ml", "柠檬汁 5ml", "气泡水补满"],
          en: ["Blue syrup 8ml", "Coconut water 30ml", "Lemon juice 5ml", "Top with soda"]
        },
        sparkling: {
          zh: ["蓝柑糖浆 8ml", "椰子水 20ml", "满冰", "气泡水补满"],
          en: ["Blue syrup 8ml", "Coconut water 20ml", "Full ice", "Top with soda"]
        },
        light: {
          zh: ["蓝柑糖浆 5ml", "椰子水 30ml", "满冰", "气泡水补满"],
          en: ["Blue syrup 5ml", "Coconut water 30ml", "Full ice", "Top with soda"]
        }
      },
      B: {
        lessSweet: {
          zh: ["芭乐青提 70ml", "满冰", "苏打水 110ml + 蓝柑少量", "柠檬汁 6ml", "蓝色层慢倒"],
          en: ["Guava grape 70ml", "Full ice", "Soda 110ml with a little blue syrup", "Lemon juice 6ml", "Slow-pour blue layer"]
        },
        tart: {
          zh: ["芭乐青提 85ml", "满冰", "苏打水 90ml + 蓝柑少量", "柠檬汁 8ml", "蓝色层慢倒"],
          en: ["Guava grape 85ml", "Full ice", "Soda 90ml with a little blue syrup", "Lemon juice 8ml", "Slow-pour blue layer"]
        },
        layered: {
          zh: ["芭乐青提 90ml", "冰加到杯口", "苏打水 90ml + 蓝柑少量", "沿长柄搅拌勺背或杯壁缓慢倒入蓝色层"],
          en: ["Guava grape 90ml", "Ice to the rim", "Soda 90ml with a little blue syrup", "Pour the blue layer slowly over the back of a long bar spoon or down the cup wall"]
        },
        sparkling: {
          zh: ["芭乐青提 75ml", "满冰", "苏打水 110ml + 蓝柑少量", "柠檬汁 5ml"],
          en: ["Guava grape 75ml", "Full ice", "Soda 110ml with a little blue syrup", "Lemon juice 5ml"]
        }
      },
      C: {
        lessSweet: {
          zh: ["苹果汁 10ml", "满杯冰块", "苏打水/起泡水补足", "浓缩咖啡液 40ml 慢倒"],
          en: ["Apple juice 10ml", "Fill the cup with ice", "Top with soda or sparkling water", "Slow-pour espresso 40ml"]
        },
        coffee: {
          zh: ["苹果汁 20ml", "满杯冰块", "苏打水/起泡水补足", "双倍浓缩 40-50ml 慢倒"],
          en: ["Apple juice 20ml", "Fill the cup with ice", "Top with soda or sparkling water", "Slow-pour double espresso 40-50ml"]
        },
        fruit: {
          zh: ["苹果汁 30ml", "满杯冰块", "苏打水/起泡水补足", "浓缩咖啡液 30ml 慢倒"],
          en: ["Apple juice 30ml", "Fill the cup with ice", "Top with soda or sparkling water", "Slow-pour espresso 30ml"]
        },
        sparkling: {
          zh: ["苹果汁 15ml", "满杯冰块", "苏打水/起泡水补足", "浓缩咖啡液 35ml 慢倒"],
          en: ["Apple juice 15ml", "Fill the cup with ice", "Top with soda or sparkling water", "Slow-pour espresso 35ml"]
        }
      }
    };

    let formula = variants[mix.id]?.[mode]?.[lang] || mix.formulas.zero[lang];
    let note;
    if (mode === "alcohol") {
      formula = mix.formulas.alcohol[lang];
      note = lang === "zh"
        ? "先完成无醇版本，再少量加入自选基底；每次调整后先试味。"
        : "Finish the no-alcohol version first, then add a small amount of your chosen base and taste after each adjustment.";
    } else if (mode === "lessSweet") {
      note = lang === "zh"
        ? "蓝柑糖浆显色和甜度都强，先从低量开始；仍偏甜时，用少量柠檬汁或苏打水调整，每次只改 3-5ml 并先试味。"
        : "Blue syrup is both strongly colored and sweet. Start low; if it is still sweet, adjust with a little lemon juice or soda in 3-5ml steps, tasting each time.";
    } else if (mode === "layered") {
      note = lang === "zh"
        ? "糖分高的液体更容易下沉。先加满冰，再沿长柄搅拌勺背或杯壁慢倒；倒得越慢，分层越稳定。"
        : "Higher-sugar liquids tend to sink. Fill with ice first, then pour slowly over the back of a long bar spoon or down the cup wall for steadier layers.";
    } else if (mode === "coffee") {
      note = lang === "zh"
        ? "咖啡机出液是热的：先加满冰和其他液体，再把浓缩沿杯壁慢倒，避免快速融冰和混层。"
        : "The espresso is hot. Fill with ice and the other liquids first, then slow-pour espresso down the cup wall to reduce melting and mixing.";
    } else if (mode === "standard") {
      note = lang === "zh"
        ? "先按当前标准配方制作。一次只调整一个变量，每次 3-5ml，搅拌、试味后再继续。"
        : "Start from the current standard recipe. Change one variable at a time in 3-5ml steps, stir, and taste before continuing.";
    } else {
      note = lang === "zh"
        ? "一次只调整一个变量，先小量试味，再决定是否继续增加。"
        : "Change one variable at a time, taste, then decide whether to add more.";
    }

    return { formula, note };
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
    generateMixName,
    generateRecipeReference
  };
})();
