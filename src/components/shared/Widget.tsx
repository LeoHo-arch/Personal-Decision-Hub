interface WidgetProps {
  title: string;
  description?: string;
}

export function Widget({ title, description }: WidgetProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      {description && (
        <p className="mt-1 text-xs text-gray-400">{description}</p>
      )}
      <div className="mt-4 flex h-32 items-center justify-center rounded-md border border-dashed border-gray-200 bg-gray-50 text-xs text-gray-400">
        内容占位区
      </div>
    </div>
  );
}
