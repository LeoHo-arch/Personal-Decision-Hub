interface TablePlaceholderProps {
  columns: string[];
  rows?: number;
  caption?: string;
}

export function TablePlaceholder({
  columns,
  rows = 4,
  caption,
}: TablePlaceholderProps) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-left text-xs uppercase tracking-wide text-gray-400">
              {columns.map((col) => (
                <th key={col} className="px-3 py-2 font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0">
                {columns.map((_, j) => (
                  <td key={j} className="px-3 py-3">
                    <div className="h-3 w-3/4 rounded bg-gray-100" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {(caption || rows === 0) && (
        <div className="mt-3 text-center text-xs text-gray-400">
          {caption ?? "暂无数据"}
        </div>
      )}
    </div>
  );
}
