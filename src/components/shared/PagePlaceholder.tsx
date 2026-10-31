interface PagePlaceholderProps {
  title: string;
  description?: string;
}

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-800">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
      </div>
      <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50 text-sm text-gray-400">
        内容占位区域
      </div>
    </div>
  );
}
