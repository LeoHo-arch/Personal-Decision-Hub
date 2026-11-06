import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  navGroups,
  type NavGroup,
  type NavItemId,
} from "@/config/navigation";
import { ChevronLeft, ChevronDown } from "lucide-react";

interface SidebarProps {
  activeId: NavItemId;
  onSelect: (id: NavItemId) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({
  activeId,
  onSelect,
  collapsed,
  onToggleCollapse,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-60 flex-col border-r border-gray-200 bg-white transition-all duration-200 lg:static lg:z-auto ${
          collapsed ? "lg:w-16" : ""
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex h-16 shrink-0 items-center justify-end border-b border-gray-200 px-3">
          <button
            type="button"
            onClick={onToggleCollapse}
            className="hidden rounded-md p-1.5 text-gray-500 hover:bg-gray-100 lg:block"
            aria-label="折叠侧边栏"
          >
            <ChevronLeft
              size={18}
              className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
            />
          </button>
          <button
            type="button"
            onClick={onCloseMobile}
            className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 lg:hidden"
            aria-label="关闭侧边栏"
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-3">
          {navGroups.map((group) => (
            <NavGroupView
              key={group.id}
              group={group}
              activeId={activeId}
              collapsed={collapsed}
              onSelect={(id) => {
                onSelect(id);
                onCloseMobile();
              }}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}

function NavGroupView({
  group,
  activeId,
  collapsed,
  onSelect,
}: {
  group: NavGroup;
  activeId: NavItemId;
  collapsed: boolean;
  onSelect: (id: NavItemId) => void;
}) {
  const [open, setOpen] = useState(true);

  if (group.items.length === 1) {
    const item = group.items[0];
    const Icon = item.icon;
    return (
      <div className="mb-1">
        <SidebarButton
          collapsed={collapsed}
          active={item.id === activeId}
          icon={<Icon size={18} />}
          label={item.label}
          onClick={() => onSelect(item.id)}
        />
      </div>
    );
  }

  const groupActive = group.items.some((i) => i.id === activeId);

  return (
    <div className="mb-3">
      <button
        type="button"
        onClick={collapsed ? undefined : () => setOpen((v) => !v)}
        aria-label={collapsed ? group.label : undefined}
        className={`flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-xs font-medium uppercase tracking-wide ${
          collapsed ? "lg:justify-center" : ""
        } ${groupActive ? "text-slate-800" : "text-gray-400"} ${
          collapsed ? "" : "hover:text-slate-700"
        }`}
      >
        <span className={`truncate ${collapsed ? "lg:hidden" : ""}`}>
          {group.label}
        </span>
        <ChevronDown
          size={14}
          className={`shrink-0 transition-transform ${open ? "" : "-rotate-90"} ${
            collapsed ? "lg:hidden" : ""
          }`}
        />
        {collapsed && <span className="hidden h-px w-6 bg-gray-200 lg:block" />}
      </button>
      <div
        className={`mt-1 space-y-0.5 ${open ? "" : "hidden"} ${
          collapsed ? "lg:block" : ""
        }`}
      >
        {group.items.map((item) => {
          const Icon = item.icon;
          return (
            <SidebarButton
              key={item.id}
              collapsed={collapsed}
              active={item.id === activeId}
              icon={<Icon size={16} />}
              label={item.label}
              indent
              onClick={() => onSelect(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

function SidebarButton({
  collapsed,
  active,
  icon,
  label,
  indent = false,
  onClick,
}: {
  collapsed: boolean;
  active: boolean;
  icon: React.ReactNode;
  label: string;
  indent?: boolean;
  onClick: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number } | null>(null);

  const showTooltip = () => {
    if (!collapsed || !buttonRef.current) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setTooltipPos({ top: rect.top + rect.height / 2, left: rect.right + 8 });
  };

  const hideTooltip = () => setTooltipPos(null);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={onClick}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        aria-label={collapsed ? label : undefined}
        aria-current={active ? "page" : undefined}
        className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors ${
          collapsed ? "lg:justify-center lg:px-2" : ""
        } ${indent ? "ml-2" : ""} ${
          active
            ? "bg-slate-800 text-white"
            : "text-gray-600 hover:bg-gray-100 hover:text-slate-800"
        }`}
      >
        <span className="shrink-0">{icon}</span>
        <span className={`truncate ${collapsed ? "lg:hidden" : ""}`}>{label}</span>
      </button>
      {collapsed && tooltipPos &&
        createPortal(
          <div
            role="tooltip"
            style={{ top: tooltipPos.top, left: tooltipPos.left }}
            className="pointer-events-none fixed z-50 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-800 px-2.5 py-1.5 text-xs font-medium text-white shadow-md"
          >
            {label}
          </div>,
          document.body,
        )}
    </>
  );
}
