import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export function DecisionStocksPage() {
  return (
    <PagePlaceholder
      title="股票观察"
      description="自选股行情、估值与关注理由记录。"
    />
  );
}

export function DecisionPurchasePage() {
  return (
    <PagePlaceholder
      title="购买计划"
      description="待购商品清单、价格目标与购买时机判断。"
    />
  );
}

export function DecisionLogPage() {
  return (
    <PagePlaceholder
      title="决策记录"
      description="个人决策日志、依据复盘与回顾。"
    />
  );
}
