import { formatValue, getSeriesChange, changeToneClass, formatDelta } from "@/lib/trends";
import type { MacroIndicator } from "@/types/macro";

interface MacroIndicatorTableProps {
  indicators: MacroIndicator[];
  onOpen: (id: string) => void;
}

export function MacroIndicatorTable({ indicators, onOpen }: MacroIndicatorTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-left text-xs uppercase tracking-wide text-gray-400">
            <th className="px-3 py-2 font-medium">指标</th>
            <th className="px-3 py-2 font-medium">最新值</th>
            <th className="px-3 py-2 font-medium">较上期</th>
            <th className="px-3 py-2 font-medium">统计口径</th>
          </tr>
        </thead>
        <tbody>
          {indicators.map((item) => {
            const change = getSeriesChange(item.series);
            return (
              <tr key={item.id} className="border-b border-gray-100 transition-colors last:border-0 hover:bg-gray-50">
                <td className="px-3 py-3">
                  <button
                    type="button"
                    onClick={() => onOpen(item.id)}
                    className="rounded text-left font-medium text-slate-800 underline-offset-2 hover:text-blue-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {item.name}
                  </button>
                </td>
                <td className="px-3 py-3 text-slate-700">{formatValue(change.latest.value, item.unit)}</td>
                <td className={`px-3 py-3 ${changeToneClass(change.delta)}`}>
                  {change.delta !== null ? formatDelta(change.delta, item.unit) : "—"}
                </td>
                <td className="px-3 py-3 text-gray-500">{item.basis}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
