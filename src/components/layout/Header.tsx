import { Search, Bell, Settings, Calendar, Menu } from "lucide-react";

interface HeaderProps {
  onToggleSidebar: () => void;
}

function useToday(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
}

export function Header({ onToggleSidebar }: HeaderProps) {
  const today = useToday();
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-gray-200 bg-white px-4">
      <button
        type="button"
        onClick={onToggleSidebar}
        className="rounded-md p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
        aria-label="切换侧边栏"
      >
        <Menu size={20} />
      </button>

      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-white">
          <span className="text-sm font-bold">PD</span>
        </div>
        <span className="hidden text-base font-semibold text-slate-800 sm:inline">
          Personal Decision Hub
        </span>
      </div>

      <div className="relative ml-4 hidden flex-1 max-w-md sm:block">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="全局搜索..."
          className="w-full rounded-md border border-gray-200 bg-gray-50 py-1.5 pl-9 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
        />
      </div>

      <div className="ml-auto flex items-center gap-1">
        <div className="hidden items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-gray-600 md:flex">
          <Calendar size={16} />
          <span>{today}</span>
        </div>
        <button
          type="button"
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
          aria-label="通知"
        >
          <Bell size={18} />
        </button>
        <button
          type="button"
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
          aria-label="设置"
        >
          <Settings size={18} />
        </button>
      </div>
    </header>
  );
}
