import { Info } from "lucide-react";

export function NewsDemoNotice() {
  return (
    <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
      <Info size={16} className="mt-0.5 shrink-0" />
      <p>
        演示数据：本页内容均为模拟示例，用于展示结构与交互，不是真实新闻报道，原文链接待后续接入。
      </p>
    </div>
  );
}
