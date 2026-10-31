import { BarChart3 } from "lucide-react";

interface ChartPlaceholderProps {
  label?: string;
  className?: string;
}

export function ChartPlaceholder({
  label = "图表占位区域",
  className = "",
}: ChartPlaceholderProps) {
  return (
    <div
      className={`flex h-48 items-center justify-center rounded-md border border-dashed border-gray-200 bg-gray-50 text-gray-400 ${className}`}
    >
      <div className="flex flex-col items-center gap-2">
        <BarChart3 size={28} className="text-gray-300" />
        <span className="text-xs">{label}</span>
      </div>
    </div>
  );
}
