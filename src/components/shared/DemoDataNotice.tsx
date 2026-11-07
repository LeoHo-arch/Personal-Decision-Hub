import { Info } from "lucide-react";

export function DemoDataNotice() {
  return (
    <div className="flex items-start gap-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
      <Info size={14} className="mt-0.5 shrink-0" />
      <span>演示数据：以下数值为示例内容，不代表真实市场或官方统计。</span>
    </div>
  );
}
