const confirmedInventory = [
  { name: "椰子水", aliases: ["椰子水", "coconut water"] },
  { name: "柠檬片", aliases: ["柠檬片", "黄柠檬", "青柠檬", "黄柠檬片", "青柠檬片", "lemon", "lemon slice", "lime", "lime slice"] },
  { name: "雪碧", aliases: ["雪碧", "sprite"] },
  { name: "气泡水", aliases: ["气泡水", "苏打水", "起泡水", "sparkling water", "soda water"] },
  { name: "芭乐青提", aliases: ["芭乐青提", "guava grape"] },
  { name: "陈皮", aliases: ["陈皮", "dried tangerine peel", "chenpi"] },
  { name: "美式咖啡", aliases: ["美式", "美式咖啡", "americano"] },
  { name: "浓缩咖啡", aliases: ["浓缩", "浓缩咖啡", "浓缩咖啡液", "espresso"] },
  { name: "双倍浓缩", aliases: ["双倍浓缩", "double espresso"] },
  { name: "蓝柑糖浆", aliases: ["蓝柑", "蓝柑糖浆", "blue curacao syrup", "blue syrup"] },
  { name: "橘皮糖浆", aliases: ["橘皮糖浆", "orange peel syrup"] },
  { name: "香草糖浆", aliases: ["香草糖浆", "vanilla syrup"] },
  { name: "榛果糖浆", aliases: ["榛果糖浆", "hazelnut syrup"] },
  { name: "焦糖糖浆", aliases: ["焦糖糖浆", "caramel syrup"] },
  { name: "绿薄荷糖浆", aliases: ["绿薄荷糖浆", "mint syrup", "green mint syrup"] },
  { name: "桂花糖浆", aliases: ["桂花糖浆", "osmanthus syrup"] },
  { name: "柠檬汁", aliases: ["柠檬汁", "lemon juice", "lime juice"] },
  { name: "苹果汁", aliases: ["苹果汁", "apple juice"] },
  { name: "起泡酒", aliases: ["起泡酒", "sparkling wine"] },
  { name: "冰块", aliases: ["冰块", "冰", "ice", "ice cubes"] }
];

const lockedRecipes = {
  A: {
    zero: [
      "蓝柑糖浆 5-15ml",
      "椰子水 30ml",
      "气泡水或雪碧倒满",
      "柠檬片",
      "用长柄搅拌勺轻轻搅拌"
    ],
    alcoholic: [
      "蓝柑糖浆 5-15ml",
      "起泡酒 30ml",
      "气泡水或雪碧倒满",
      "柠檬片",
      "用长柄搅拌勺轻轻搅拌"
    ]
  },
  C: {
    zero: [
      "苹果汁 20ml",
      "满杯冰块",
      "苏打水或起泡水补足",
      "浓缩咖啡液 40ml 慢倒"
    ]
  }
};

const bartenderRules = [
  "蓝柑糖浆颜色和甜度都很强，约 3ml 已有明显颜色；优先从低量开始，再逐步增加。",
  "少甜时优先降低蓝柑或风味糖浆，再用少量柠檬汁和气泡水修正。",
  "糖浆调整以 3-5ml 为一档，一次只调整一个变量，先试味再继续。",
  "做分层时先加满冰，再沿长柄搅拌勺背或杯壁慢倒上层；高糖液体更容易下沉。",
  "咖啡机出品为热咖啡。配方 C 先满杯冰，再慢倒浓缩，降低热咖啡对冰和气泡的影响。",
  "增强咖啡感时可优先考虑双倍浓缩，但从约 40ml 开始，避免盖住苹果和气泡。",
  "香草、榛果、焦糖更适合咖啡方向；绿薄荷、桂花、橘皮更适合清爽或气泡方向。",
  "所有建议均为现场参考，以当日原料、杯量和试味结果为准。"
];

const unavailableOrUnconfirmed = [
  "蓝金酒",
  "伏特加",
  "vodka",
  "金酒",
  "gin",
  "朗姆酒",
  "rum",
  "龙舌兰",
  "tequila",
  "威士忌",
  "whisky",
  "whiskey",
  "葡萄汁",
  "grape juice",
  "蔓越莓汁",
  "cranberry juice",
  "未知粉色基底",
  "pink base"
];

module.exports = {
  confirmedInventory,
  lockedRecipes,
  bartenderRules,
  unavailableOrUnconfirmed
};
