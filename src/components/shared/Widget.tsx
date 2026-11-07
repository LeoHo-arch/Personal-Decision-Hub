import type { ReactNode } from "react";

interface WidgetProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function Widget({ title, description, children }: WidgetProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      {description && (
        <p className="mt-1 text-xs text-gray-400">{description}</p>
      )}
      <div className="mt-3">
        {children ?? (
          <div className="flex items-center justify-center rounded-md border border-dashed border-gray-200 bg-gray-50 py-8 text-xs text-gray-400">
            内容占位区
          </div>
        )}
      </div>
    </div>
  );
}
