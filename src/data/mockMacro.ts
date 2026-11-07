import type { MacroIndicator } from "@/types/macro";

const DEMO_SOURCE = "演示数据（示例统计口径，非官方数值）";

export const CN_GDP: MacroIndicator = {
  id: "cn-gdp",
  name: "GDP 同比增速",
  region: "china",
  definition: "国内生产总值按可比价格计算的同比增长率，反映经济整体增长速度。",
  unit: "%",
  basis: "同比（季度）",
  source: DEMO_SOURCE,
  interpretation: "示例解读：增速近几个季度温和放缓，可作为观察经济景气变化的参考之一。",
  series: [
    { period: "2025Q2", value: 5.2 },
    { period: "2025Q3", value: 5.0 },
    { period: "2025Q4", value: 4.8 },
    { period: "2026Q1", value: 4.9 },
    { period: "2026Q2", value: 4.7 },
    { period: "2026Q3", value: 4.6 },
  ],
};

export const CN_CPI: MacroIndicator = {
  id: "cn-cpi",
  name: "居民消费价格指数 CPI",
  region: "china",
  definition: "反映居民购买的消费品和服务价格水平变动情况的指标，是通胀的主要观察口径。",
  unit: "%",
  basis: "同比（月度）",
  source: DEMO_SOURCE,
  interpretation: "示例解读：物价涨幅维持低位，通胀压力整体较为温和。",
  series: [
    { period: "2026-04", value: 0.4 },
    { period: "2026-05", value: 0.3 },
    { period: "2026-06", value: 0.2 },
    { period: "2026-07", value: 0.1 },
    { period: "2026-08", value: 0.0 },
    { period: "2026-09", value: 0.2 },
  ],
};

export const CN_PPI: MacroIndicator = {
  id: "cn-ppi",
  name: "工业生产者出厂价格 PPI",
  region: "china",
  definition: "衡量工业企业产品出厂价格变化的指标，常被视为上游价格和企业利润的先行信号。",
  unit: "%",
  basis: "同比（月度）",
  source: DEMO_SOURCE,
  interpretation: "示例解读：出厂价格仍在负增长区间，但降幅较前期收窄。",
  series: [
    { period: "2026-04", value: -2.1 },
    { period: "2026-05", value: -1.9 },
    { period: "2026-06", value: -1.7 },
    { period: "2026-07", value: -1.8 },
    { period: "2026-08", value: -1.5 },
    { period: "2026-09", value: -1.2 },
  ],
};

export const CN_PMI: MacroIndicator = {
  id: "cn-pmi",
  name: "制造业 PMI",
  region: "china",
  definition: "采购经理指数，50 为荣枯线，高于 50 通常表示制造业活动扩张，低于 50 表示收缩。",
  unit: "",
  basis: "数值（月度）",
  source: DEMO_SOURCE,
  interpretation: "示例解读：指数围绕荣枯线附近波动，制造业景气度总体平稳。",
  series: [
    { period: "2026-04", value: 49.8 },
    { period: "2026-05", value: 50.0 },
    { period: "2026-06", value: 50.2 },
    { period: "2026-07", value: 49.9 },
    { period: "2026-08", value: 50.1 },
    { period: "2026-09", value: 50.3 },
  ],
};

export const US_GDP: MacroIndicator = {
  id: "us-gdp",
  name: "GDP 环比折年率",
  region: "us",
  definition: "按季度环比变化折算为年率的经济增长指标，用于衡量美国经济的短期增长节奏。",
  unit: "%",
  basis: "环比折年率（季度）",
  source: DEMO_SOURCE,
  interpretation: "示例解读：季度增速在 2% 上下波动，增长整体保持韧性。",
  series: [
    { period: "2025Q2", value: 1.9 },
    { period: "2025Q3", value: 2.4 },
    { period: "2025Q4", value: 2.0 },
    { period: "2026Q1", value: 1.8 },
    { period: "2026Q2", value: 2.2 },
    { period: "2026Q3", value: 2.1 },
  ],
};

export const US_CPI: MacroIndicator = {
  id: "us-cpi",
  name: "消费者价格指数 CPI",
  region: "us",
  definition: "反映美国城市居民消费品和服务价格变化的指标，是观察通胀走势的核心数据。",
  unit: "%",
  basis: "同比（月度）",
  source: DEMO_SOURCE,
  interpretation: "示例解读：通胀率仍高于长期目标水平，但近几个月总体回落。",
  series: [
    { period: "2026-04", value: 2.8 },
    { period: "2026-05", value: 2.6 },
    { period: "2026-06", value: 2.5 },
    { period: "2026-07", value: 2.7 },
    { period: "2026-08", value: 2.9 },
    { period: "2026-09", value: 2.6 },
  ],
};

export const US_UNEMPLOYMENT: MacroIndicator = {
  id: "us-unemployment",
  name: "失业率",
  region: "us",
  definition: "劳动力中处于失业状态的人口占比，是衡量就业市场健康度的重要指标。",
  unit: "%",
  basis: "数值（月度）",
  source: DEMO_SOURCE,
  interpretation: "示例解读：失业率小幅抬升，但仍处于历史相对较低区间。",
  series: [
    { period: "2026-04", value: 4.1 },
    { period: "2026-05", value: 4.2 },
    { period: "2026-06", value: 4.2 },
    { period: "2026-07", value: 4.3 },
    { period: "2026-08", value: 4.4 },
    { period: "2026-09", value: 4.3 },
  ],
};

export const US_FED_RATE: MacroIndicator = {
  id: "us-fed-rate",
  name: "联邦基金利率",
  region: "us",
  definition: "美联储设定的银行间隔夜拆借目标利率区间中值，是美国货币政策的核心工具。",
  unit: "%",
  basis: "数值（月度）",
  source: DEMO_SOURCE,
  interpretation: "示例解读：政策利率呈阶段性下调，利率路径取决于后续通胀与就业数据。",
  series: [
    { period: "2026-04", value: 4.25 },
    { period: "2026-05", value: 4.0 },
    { period: "2026-06", value: 4.0 },
    { period: "2026-07", value: 3.75 },
    { period: "2026-08", value: 3.75 },
    { period: "2026-09", value: 3.5 },
  ],
};

export const MACRO_INDICATORS: MacroIndicator[] = [
  CN_GDP,
  CN_CPI,
  CN_PPI,
  CN_PMI,
  US_GDP,
  US_CPI,
  US_UNEMPLOYMENT,
  US_FED_RATE,
];
