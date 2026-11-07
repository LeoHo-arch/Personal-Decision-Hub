import { PageHeader } from "@/components/wireframe";
import { Widget } from "@/components/shared/Widget";
import { IndicatorRows, MacroTrendPreview, ProductRows } from "@/components/dashboard/DashboardRows";
import { RefreshCw } from "lucide-react";
import {
  CN_CPI,
  CN_GDP,
  CN_PMI,
  CN_PPI,
  US_CPI,
  US_FED_RATE,
  US_GDP,
  US_UNEMPLOYMENT,
} from "@/data/mockMacro";
import {
  DIGITAL_PHONE,
  ENERGY_COPPER,
  ENERGY_GAS,
  ENERGY_GOLD,
  ENERGY_OIL,
  FOOD_EGG,
  FOOD_OIL,
} from "@/data/mockPrice";
import type { DetailRef } from "@/types/detail";

interface DashboardPageProps {
  onOpenDetail: (ref: DetailRef) => void;
}

export function DashboardPage({ onOpenDetail }: DashboardPageProps) {
  const openMacro = (id: string) => onOpenDetail({ kind: "macro", id });
  const openPrice = (id: string) => onOpenDetail({ kind: "price", id });

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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Widget title="中国宏观经济概览" description="GDP、CPI、PPI 等核心指标">
          <IndicatorRows indicators={[CN_GDP, CN_CPI, CN_PPI, CN_PMI]} onOpen={openMacro} />
        </Widget>
        <Widget title="美国宏观经济概览" description="利率、通胀、就业等核心指标">
          <IndicatorRows indicators={[US_GDP, US_CPI, US_UNEMPLOYMENT, US_FED_RATE]} onOpen={openMacro} />
        </Widget>
        <div className="md:col-span-2 lg:col-span-1">
          <Widget title="股票观察" description="自选股行情与关注列表占位" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Widget title="核心宏观经济趋势" description="关键宏观指标趋势图">
            <MacroTrendPreview item={CN_GDP} onOpen={openMacro} />
          </Widget>
        </div>
        <Widget title="汇率与大宗商品" description="主要大宗商品价格">
          <ProductRows products={[ENERGY_OIL, ENERGY_GAS, ENERGY_GOLD, ENERGY_COPPER]} onOpen={openPrice} />
        </Widget>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Widget title="消费品价格追踪" description="数码、食品、能源价格走势">
          <ProductRows products={[DIGITAL_PHONE, FOOD_OIL, FOOD_EGG]} onOpen={openPrice} />
        </Widget>
        <Widget title="最近购买计划" description="近期计划购买的商品列表占位" />
        <div className="md:col-span-2 lg:col-span-1">
          <Widget title="最近决策记录" description="近期个人决策日志占位" />
        </div>
      </div>
    </div>
  );
}
