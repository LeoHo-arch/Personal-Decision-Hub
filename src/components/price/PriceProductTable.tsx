import { formatValue, getSeriesChange, changeToneClass, formatDelta, formatDeltaPct } from "@/lib/trends";
import type { PriceProduct } from "@/types/price";

interface PriceProductTableProps {
  products: PriceProduct[];
  onOpen: (id: string) => void;
}

export function PriceProductTable({ products, onOpen }: PriceProductTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-left text-xs uppercase tracking-wide text-gray-400">
            <th className="px-3 py-2 font-medium">商品</th>
            <th className="px-3 py-2 font-medium">规格</th>
            <th className="px-3 py-2 font-medium">当前价</th>
            <th className="px-3 py-2 font-medium">较上期</th>
            <th className="px-3 py-2 font-medium">更新时间</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
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
                <td className="px-3 py-3 text-gray-500">{item.spec}</td>
                <td className="px-3 py-3 text-slate-700">{formatValue(change.latest.value, item.unit)}</td>
                <td className={`px-3 py-3 ${changeToneClass(change.delta)}`}>
                  {change.delta !== null ? formatDelta(change.delta, item.unit) : "—"}
                  {change.deltaPct !== null && (
                    <span className="ml-1 text-xs">({formatDeltaPct(change.deltaPct)})</span>
                  )}
                </td>
                <td className="px-3 py-3 text-gray-500">{change.latest.period}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
