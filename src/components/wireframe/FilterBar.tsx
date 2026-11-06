import type { ReactNode } from "react";

interface FilterBarProps {
  children?: ReactNode;
  className?: string;
}

export function FilterBar({ children, className = "" }: FilterBarProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm ${className}`}
    >
      {children ?? <span className="text-xs text-gray-400">筛选与操作区</span>}
    </div>
  );
}

interface FilterSelectOption {
  value: string;
  label: string;
}

export function FilterSelect({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: (string | FilterSelectOption)[];
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <label className="flex items-center gap-2 text-xs text-gray-500">
      {label}
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-sm text-gray-600 focus:outline-none"
      >
        {options.map((o) => {
          const option = typeof o === "string" ? { value: o, label: o } : o;
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export function FilterSearch() {
  return (
    <input
      type="text"
      placeholder="搜索..."
      className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
    />
  );
}

export function FilterButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
    >
      {label}
    </button>
  );
}
