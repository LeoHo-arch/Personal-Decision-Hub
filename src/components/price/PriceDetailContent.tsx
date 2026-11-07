import { SectionCard } from "@/components/wireframe";
import { DemoDataNotice } from "@/components/shared/DemoDataNotice";
import { TrendChart } from "@/components/shared/TrendChart";
import {
  changeToneClass,
  formatDelta,
  formatDeltaPct,
  formatValue,
  getSeriesChange,
} from "@/lib/trends";
import type { PriceCategory, PriceProduct } from "@/types/price";

const CATEGORY_LABELS: Record<PriceCategory, string> = {
  digital: "数码产品",
  food: "食品与日用品",
  energy: "能源与大宗商品",
};

export function PriceDetailHeader({ item }: { item: PriceProduct }) {
  return (
    <div>
      <h2 className="text-xl font-semibold leading-tight text-slate-800">{item.name}</h2>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-md bg-blue-50 px-2 py-0.5 font-medium text-blue-700">
          {CATEGORY_LABELS[item.category]}
        </span>
        <span className="rounded-md bg-gray-100 px-2 py-0.5 font-medium text-gray-600">
          {item.spec}
        </span>
      </div>
    </div>
  );
}

export function PriceDetailContent({ item }: { item: PriceProduct }) {
  const change = getSeriesChange(item.series);

  return (
    <div className="space-y-4">
      <DemoDataNotice />

      <SectionCard title="当前价格" description={`更新至 ${change.latest.period}`}>
        <p className="text-3xl font-semibold text-slate-800">
          {formatValue(change.latest.value, item.unit)}
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-md bg-gray-50 p-3">
            <dt className="text-xs text-gray-500">上期价格</dt>
            <dd className="mt-1 font-medium text-slate-700">
              {change.previous ? formatValue(change.previous.value, item.unit) : "—"}
            </dd>
          </div>
          <div className="rounded-md bg-gray-50 p-3">
            <dt className="text-xs text-gray-500">价格变化</dt>
            <dd className={`mt-1 font-medium ${changeToneClass(change.delta)}`}>
              {change.delta !== null ? formatDelta(change.delta, item.unit) : "—"}
              {change.deltaPct !== null && (
                <span className="ml-1 text-xs font-normal">({formatDeltaPct(change.deltaPct)})</span>
              )}
            </dd>
          </div>
          <div className="rounded-md bg-gray-50 p-3">
            <dt className="text-xs text-gray-500">历史最低</dt>
            <dd className="mt-1 font-medium text-slate-700">{formatValue(change.min, item.unit)}</dd>
          </div>
          <div className="rounded-md bg-gray-50 p-3">
            <dt className="text-xs text-gray-500">历史最高</dt>
            <dd className="mt-1 font-medium text-slate-700">{formatValue(change.max, item.unit)}</dd>
          </div>
        </dl>
      </SectionCard>

      <SectionCard title="历史价格趋势" description={`共 ${item.series.length} 期记录`}>
        <TrendChart series={item.series} label={`${item.name}历史价格趋势`} />
      </SectionCard>

      <SectionCard title="商品信息">
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-gray-500">规格</dt>
            <dd className="text-right text-slate-700">{item.spec}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-gray-500">数据来源</dt>
            <dd className="text-right text-slate-700">{item.source}</dd>
          </div>
        </dl>
      </SectionCard>

      <SectionCard title="相关备注">
        <p className="text-sm leading-relaxed text-gray-700">{item.notes}</p>
      </SectionCard>
    </div>
  );
}
