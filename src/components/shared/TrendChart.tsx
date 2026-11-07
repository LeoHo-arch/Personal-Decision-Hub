import { useId } from "react";
import type { SeriesPoint } from "@/types/series";

const WIDTH = 320;
const HEIGHT = 120;
const PAD_X = 8;
const PAD_Y = 12;

interface TrendChartProps {
  series: SeriesPoint[];
  label: string;
  className?: string;
}

export function TrendChart({ series, label, className = "" }: TrendChartProps) {
  const gradientId = useId();

  if (series.length < 2) {
    return <p className="text-sm text-gray-400">暂无趋势数据</p>;
  }

  const values = series.map((p) => p.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const innerW = WIDTH - PAD_X * 2;
  const innerH = HEIGHT - PAD_Y * 2;

  const points = series.map((p, i) => ({
    x: PAD_X + (i / (series.length - 1)) * innerW,
    y: PAD_Y + innerH - ((p.value - min) / range) * innerH,
  }));

  const linePath = points.map((pt, i) => `${i === 0 ? "M" : "L"}${pt.x.toFixed(1)},${pt.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${points[points.length - 1].x.toFixed(1)},${HEIGHT} L${points[0].x.toFixed(1)},${HEIGHT} Z`;
  const last = points[points.length - 1];

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-40 w-full overflow-visible"
        role="img"
        aria-label={label}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#${gradientId})`} />
        <path
          d={linePath}
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx={last.x} cy={last.y} r="3.5" fill="#2563eb" />
      </svg>
      <div className="mt-2 flex justify-between text-xs text-gray-400">
        <span>{series[0].period}</span>
        <span>{series[series.length - 1].period}</span>
      </div>
    </div>
  );
}
