import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export function MacroOverviewPage() {
  return (
    <PagePlaceholder
      title="宏观经济总览"
      description="中国、美国与全球宏观经济指标汇总。"
    />
  );
}

export function MacroChinaPage() {
  return (
    <PagePlaceholder
      title="中国经济"
      description="GDP、CPI、PPI、社融、PMI 等中国经济核心指标。"
    />
  );
}

export function MacroUsPage() {
  return (
    <PagePlaceholder
      title="美国经济"
      description="利率、通胀、就业、消费等美国经济核心指标。"
    />
  );
}

export function MacroGlobalPage() {
  return (
    <PagePlaceholder
      title="全球市场"
      description="全球主要股指、汇率、大宗商品及跨境资金流向。"
    />
  );
}
