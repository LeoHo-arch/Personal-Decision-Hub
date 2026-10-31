import { Inbox } from "lucide-react";

interface EmptyStateProps {
  message?: string;
  className?: string;
}

export function EmptyState({
  message = "暂无数据",
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex h-32 items-center justify-center rounded-md border border-dashed border-gray-200 bg-gray-50 text-xs text-gray-400 ${className}`}
    >
      <div className="flex flex-col items-center gap-2">
        <Inbox size={24} className="text-gray-300" />
        <span>{message}</span>
      </div>
    </div>
  );
}
