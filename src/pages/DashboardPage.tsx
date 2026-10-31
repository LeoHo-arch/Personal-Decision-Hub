import { Widget } from "@/components/shared/Widget";
import { PageHeader } from "@/components/wireframe";
import { RefreshCw } from "lucide-react";

const widgets: { title: string; description: string }[] = [
  { title: "中国宏观经济概览", description: "GDP、CPI、PPI 等核心指标占位" },
  { title: "美国宏观经济概览", description: "利率、通胀、就业等核心指标占位" },
  { title: "股票观察", description: "自选股行情与关注列表占位" },
  { title: "核心宏观经济趋势", description: "关键宏观指标趋势图占位" },
  { title: "汇率与大宗商品", description: "主要汇率及大宗商品价格占位" },
  { title: "消费品价格追踪", description: "数码、食品、能源价格走势占位" },
  { title: "最近购买计划", description: "近期计划购买的商品列表占位" },
  { title: "最近决策记录", description: "近期个人决策日志占位" },
];

export function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="个人决策中心"
        description="宏观经济、消费品价格与个人决策管理。"
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
          >
            <RefreshCw size={14} />
            刷新
          </button>
        }
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {widgets.map((w) => (
          <Widget key={w.title} title={w.title} description={w.description} />
        ))}
      </div>
    </div>
  );
}
