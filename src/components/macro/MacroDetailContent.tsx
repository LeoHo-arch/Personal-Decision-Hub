import { SectionCard } from "@/components/wireframe";
import { DemoDataNotice } from "@/components/shared/DemoDataNotice";
import { TrendChart } from "@/components/shared/TrendChart";
import {
  changeToneClass,
  formatDelta,
  formatValue,
  getSeriesChange,
} from "@/lib/trends";
import type { MacroIndicator, MacroRegion } from "@/types/macro";

const REGION_LABELS: Record<MacroRegion, string> = {
  china: "中国",
  us: "美国",
};

export function MacroDetailHeader({ item }: { item: MacroIndicator }) {
  return (
    <div>
      <h2 className="text-xl font-semibold leading-tight text-slate-800">{item.name}</h2>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-md bg-blue-50 px-2 py-0.5 font-medium text-blue-700">
          {REGION_LABELS[item.region]}
        </span>
        <span className="rounded-md bg-gray-100 px-2 py-0.5 font-medium text-gray-600">
          {item.basis}
        </span>
      </div>
    </div>
  );
}

export function MacroDetailContent({ item }: { item: MacroIndicator }) {
  const change = getSeriesChange(item.series);
  const latestText = formatValue(change.latest.value, item.unit);

  return (
    <div className="space-y-4">
      <DemoDataNotice />

      <SectionCard title="最新数值" description={`统计期：${change.latest.period}`}>
        <p className="text-3xl font-semibold text-slate-800">{latestText}</p>
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-md bg-gray-50 p-3">
            <dt className="text-xs text-gray-500">上一期</dt>
            <dd className="mt-1 font-medium text-slate-700">
              {change.previous ? formatValue(change.previous.value, item.unit) : "暂无数据"}
            </dd>
          </div>
          <div className="rounded-md bg-gray-50 p-3">
            <dt className="text-xs text-gray-500">较上一期变化</dt>
            <dd className={`mt-1 font-medium ${changeToneClass(change.delta)}`}>
              {change.delta !== null ? formatDelta(change.delta, item.unit) : "暂无数据"}
            </dd>
          </div>
        </dl>
      </SectionCard>

      <SectionCard title="历史趋势" description={`共 ${item.series.length} 期，区间 ${formatValue(change.min, item.unit)} 至 ${formatValue(change.max, item.unit)}`}>
        <TrendChart series={item.series} label={`${item.name}历史趋势`} />
      </SectionCard>

      <SectionCard title="指标解读" description="以下为分析判断，并非官方结论">
        <p className="text-sm leading-relaxed text-gray-700">{item.interpretation}</p>
      </SectionCard>

      <SectionCard title="指标定义与来源">
        <p className="text-sm leading-relaxed text-gray-700">{item.definition}</p>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-gray-500">统计口径</dt>
            <dd className="text-right text-slate-700">{item.basis}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-gray-500">数据来源</dt>
            <dd className="text-right text-slate-700">{item.source}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-gray-500">更新时间</dt>
            <dd className="text-right text-slate-700">{change.latest.period}</dd>
          </div>
        </dl>
      </SectionCard>
    </div>
  );
}
