import type { SeriesPoint } from "@/types/series";

export interface SeriesChange {
  latest: SeriesPoint;
  previous: SeriesPoint | null;
  delta: number | null;
  deltaPct: number | null;
  min: number;
  max: number;
}

export function getSeriesChange(series: SeriesPoint[]): SeriesChange {
  const latest = series[series.length - 1];
  const previous = series.length > 1 ? series[series.length - 2] : null;
  const delta = previous ? latest.value - previous.value : null;
  const deltaPct = previous && previous.value !== 0 ? (delta! / previous.value) * 100 : null;
  const values = series.map((p) => p.value);
  return {
    latest,
    previous,
    delta,
    deltaPct,
    min: Math.min(...values),
    max: Math.max(...values),
  };
}

export function latestStat(series: SeriesPoint[], unit: string): { value: string; change?: string } {
  const change = getSeriesChange(series);
  return {
    value: formatValue(change.latest.value, unit),
    change: change.delta !== null ? `较上期 ${formatDelta(change.delta, unit)}` : undefined,
  };
}

export function formatValue(value: number, unit: string): string {
  const text = value.toLocaleString("zh-CN", { maximumFractionDigits: 2 });
  if (unit === "%") return `${text}%`;
  return unit ? `${text} ${unit}` : text;
}

export function formatDelta(delta: number, unit: string): string {
  const sign = delta > 0 ? "+" : delta < 0 ? "-" : "";
  const abs = Math.abs(delta);
  if (unit === "%") {
    return `${sign}${abs.toLocaleString("zh-CN", { maximumFractionDigits: 2 })} 个百分点`;
  }
  return `${sign}${formatValue(abs, unit)}`;
}

export function formatDeltaPct(deltaPct: number): string {
  const sign = deltaPct > 0 ? "+" : deltaPct < 0 ? "-" : "";
  return `${sign}${Math.abs(deltaPct).toFixed(2)}%`;
}

export function changeToneClass(delta: number | null): string {
  if (delta === null || delta === 0) return "text-gray-500";
  return delta > 0 ? "text-rose-600" : "text-emerald-600";
}
