import type { PriceProduct } from "@/types/price";

const DEMO_SOURCE = "演示数据（示例价格，非真实商品报价）";

export const DIGITAL_PHONE: PriceProduct = {
  id: "digital-phone",
  name: "示例旗舰手机",
  spec: "256GB · 深色",
  category: "digital",
  unit: "元",
  source: "示例商家 A（演示）",
  notes: "示例备注：促销节点前后价格波动较大，请以实际购买页面为准。",
  series: [
    { period: "2026-04", value: 6999 },
    { period: "2026-05", value: 6899 },
    { period: "2026-06", value: 6899 },
    { period: "2026-07", value: 6699 },
    { period: "2026-08", value: 6499 },
    { period: "2026-09", value: 6399 },
  ],
};

export const DIGITAL_LAPTOP: PriceProduct = {
  id: "digital-laptop",
  name: "示例轻薄笔记本",
  spec: "16GB + 512GB",
  category: "digital",
  unit: "元",
  source: "示例商家 B（演示）",
  notes: "示例备注：新品发布前后通常出现阶段性降价。",
  series: [
    { period: "2026-04", value: 8999 },
    { period: "2026-05", value: 8999 },
    { period: "2026-06", value: 8799 },
    { period: "2026-07", value: 8799 },
    { period: "2026-08", value: 8599 },
    { period: "2026-09", value: 8599 },
  ],
};

export const DIGITAL_HEADPHONE: PriceProduct = {
  id: "digital-headphone",
  name: "示例降噪耳机",
  spec: "头戴式 · 无线",
  category: "digital",
  unit: "元",
  source: "示例商家 A（演示）",
  notes: "示例备注：同款在不同渠道的价格可能存在差异。",
  series: [
    { period: "2026-04", value: 1999 },
    { period: "2026-05", value: 1899 },
    { period: "2026-06", value: 1899 },
    { period: "2026-07", value: 1799 },
    { period: "2026-08", value: 1799 },
    { period: "2026-09", value: 1699 },
  ],
};

export const FOOD_OIL: PriceProduct = {
  id: "food-oil",
  name: "示例食用油",
  spec: "5L · 压榨",
  category: "food",
  unit: "元",
  source: DEMO_SOURCE,
  notes: "示例备注：食用油价格受原料与季节性采购影响。",
  series: [
    { period: "2026-04", value: 72 },
    { period: "2026-05", value: 72 },
    { period: "2026-06", value: 74 },
    { period: "2026-07", value: 75 },
    { period: "2026-08", value: 76 },
    { period: "2026-09", value: 75 },
  ],
};

export const FOOD_RICE: PriceProduct = {
  id: "food-rice",
  name: "示例大米",
  spec: "5kg · 东北产",
  category: "food",
  unit: "元",
  source: DEMO_SOURCE,
  notes: "示例备注：大米价格相对稳定，月度波动通常较小。",
  series: [
    { period: "2026-04", value: 39.9 },
    { period: "2026-05", value: 39.5 },
    { period: "2026-06", value: 39.8 },
    { period: "2026-07", value: 40.2 },
    { period: "2026-08", value: 40.0 },
    { period: "2026-09", value: 40.5 },
  ],
};

export const FOOD_EGG: PriceProduct = {
  id: "food-egg",
  name: "示例鸡蛋",
  spec: "30 枚 · 散养",
  category: "food",
  unit: "元",
  source: DEMO_SOURCE,
  notes: "示例备注：鸡蛋价格季节性明显，波动幅度较大。",
  series: [
    { period: "2026-04", value: 28.5 },
    { period: "2026-05", value: 27.9 },
    { period: "2026-06", value: 26.8 },
    { period: "2026-07", value: 27.2 },
    { period: "2026-08", value: 28.0 },
    { period: "2026-09", value: 28.6 },
  ],
};

export const FOOD_DETERGENT: PriceProduct = {
  id: "food-detergent",
  name: "示例洗衣液",
  spec: "2kg · 家庭装",
  category: "food",
  unit: "元",
  source: DEMO_SOURCE,
  notes: "示例备注：日用品常见促销活动，实际到手价以结算为准。",
  series: [
    { period: "2026-04", value: 35 },
    { period: "2026-05", value: 34.5 },
    { period: "2026-06", value: 34.5 },
    { period: "2026-07", value: 33.9 },
    { period: "2026-08", value: 33.9 },
    { period: "2026-09", value: 33.5 },
  ],
};

export const ENERGY_OIL: PriceProduct = {
  id: "energy-oil",
  name: "原油（示例 WTI）",
  spec: "美元 / 桶",
  category: "energy",
  unit: "美元/桶",
  source: DEMO_SOURCE,
  notes: "示例备注：原油价格受供需、地缘事件与库存数据影响。",
  series: [
    { period: "2026-04", value: 78.2 },
    { period: "2026-05", value: 76.5 },
    { period: "2026-06", value: 74.9 },
    { period: "2026-07", value: 75.8 },
    { period: "2026-08", value: 77.1 },
    { period: "2026-09", value: 76.4 },
  ],
};

export const ENERGY_GAS: PriceProduct = {
  id: "energy-gas",
  name: "天然气（示例）",
  spec: "美元 / 百万英热",
  category: "energy",
  unit: "美元/百万英热",
  source: DEMO_SOURCE,
  notes: "示例备注：天然气价格受季节性取暖需求与库存影响明显。",
  series: [
    { period: "2026-04", value: 2.85 },
    { period: "2026-05", value: 2.62 },
    { period: "2026-06", value: 2.74 },
    { period: "2026-07", value: 2.91 },
    { period: "2026-08", value: 3.05 },
    { period: "2026-09", value: 2.98 },
  ],
};

export const ENERGY_GOLD: PriceProduct = {
  id: "energy-gold",
  name: "黄金（示例）",
  spec: "美元 / 盎司",
  category: "energy",
  unit: "美元/盎司",
  source: DEMO_SOURCE,
  notes: "示例备注：黄金价格常与利率预期和避险情绪相关。",
  series: [
    { period: "2026-04", value: 2310 },
    { period: "2026-05", value: 2345 },
    { period: "2026-06", value: 2368 },
    { period: "2026-07", value: 2352 },
    { period: "2026-08", value: 2379 },
    { period: "2026-09", value: 2401 },
  ],
};

export const ENERGY_COPPER: PriceProduct = {
  id: "energy-copper",
  name: "铜（示例）",
  spec: "美元 / 吨",
  category: "energy",
  unit: "美元/吨",
  source: DEMO_SOURCE,
  notes: "示例备注：铜价常被视为工业需求的观察指标之一。",
  series: [
    { period: "2026-04", value: 9120 },
    { period: "2026-05", value: 9050 },
    { period: "2026-06", value: 9210 },
    { period: "2026-07", value: 9305 },
    { period: "2026-08", value: 9268 },
    { period: "2026-09", value: 9340 },
  ],
};

export const PRICE_PRODUCTS: PriceProduct[] = [
  DIGITAL_PHONE,
  DIGITAL_LAPTOP,
  DIGITAL_HEADPHONE,
  FOOD_OIL,
  FOOD_RICE,
  FOOD_EGG,
  FOOD_DETERGENT,
  ENERGY_OIL,
  ENERGY_GAS,
  ENERGY_GOLD,
  ENERGY_COPPER,
];
