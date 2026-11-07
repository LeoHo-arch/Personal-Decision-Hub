import { DetailTrigger } from "@/components/shared/DetailTrigger";
import { TrendChart } from "@/components/shared/TrendChart";
import { changeToneClass, formatDelta, formatValue, getSeriesChange } from "@/lib/trends";
import type { MacroIndicator } from "@/types/macro";
import type { PriceProduct } from "@/types/price";

interface IndicatorRowsProps {
  indicators: MacroIndicator[];
  onOpen: (id: string) => void;
}

export function IndicatorRows({ indicators, onOpen }: IndicatorRowsProps) {
  return (
    <div className="space-y-1">
      {indicators.map((item) => {
        const change = getSeriesChange(item.series);
        return (
          <DetailTrigger
            key={item.id}
            onOpen={() => onOpen(item.id)}
            className="flex items-center justify-between gap-3 rounded-md px-3 py-2 hover:bg-gray-50"
          >
            <span className="text-sm text-slate-700">{item.name}</span>
            <span className="text-right">
              <span className="block text-sm font-semibold text-slate-800">
                {formatValue(change.latest.value, item.unit)}
              </span>
              <span className={`block text-xs ${changeToneClass(change.delta)}`}>
                {change.delta !== null ? formatDelta(change.delta, item.unit) : "暂无数据"}
              </span>
            </span>
          </DetailTrigger>
        );
      })}
    </div>
  );
}

interface ProductRowsProps {
  products: PriceProduct[];
  onOpen: (id: string) => void;
}

export function ProductRows({ products, onOpen }: ProductRowsProps) {
  return (
    <div className="space-y-1">
      {products.map((item) => {
        const change = getSeriesChange(item.series);
        return (
          <DetailTrigger
            key={item.id}
            onOpen={() => onOpen(item.id)}
            className="flex items-center justify-between gap-3 rounded-md px-3 py-2 hover:bg-gray-50"
          >
            <span className="min-w-0">
              <span className="block truncate text-sm text-slate-700">{item.name}</span>
              <span className="block truncate text-xs text-gray-400">{item.spec}</span>
            </span>
            <span className="shrink-0 text-right">
              <span className="block text-sm font-semibold text-slate-800">
                {formatValue(change.latest.value, item.unit)}
              </span>
              <span className={`block text-xs ${changeToneClass(change.delta)}`}>
                {change.delta !== null ? formatDelta(change.delta, item.unit) : "暂无数据"}
              </span>
            </span>
          </DetailTrigger>
        );
      })}
    </div>
  );
}

interface TrendRowProps {
  item: MacroIndicator;
  onOpen: (id: string) => void;
}

export function MacroTrendPreview({ item, onOpen }: TrendRowProps) {
  return (
    <DetailTrigger onOpen={() => onOpen(item.id)}>
      <TrendChart series={item.series} label={`${item.name}趋势图`} />
    </DetailTrigger>
  );
}
