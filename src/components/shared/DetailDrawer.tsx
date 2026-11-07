import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const TRANSITION_MS = 300;

interface DetailDrawerProps {
  open: boolean;
  onClose: () => void;
  label: string;
  header: ReactNode;
  children: ReactNode;
}

export function DetailDrawer({ open, onClose, label, header, children }: DetailDrawerProps) {
  const [mounted, setMounted] = useState(open);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const frame = requestAnimationFrame(() => setEntered(true));
      return () => cancelAnimationFrame(frame);
    }
    setEntered(false);
    const timer = window.setTimeout(() => setMounted(false), TRANSITION_MS);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!mounted) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mounted]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`absolute inset-0 bg-slate-900/40 transition-opacity duration-300 ${
          entered ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={`absolute inset-y-0 right-0 flex w-full flex-col bg-white shadow-2xl transition-transform duration-300 ease-out sm:w-[560px] sm:max-w-[55vw] ${
          entered ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-gray-200 px-5 py-4">
          <div className="min-w-0 flex-1">{header}</div>
          <button
            type="button"
            onClick={onClose}
            aria-label="关闭详情"
            autoFocus
            className="shrink-0 rounded-md p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-slate-800"
          >
            <X size={18} />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5">
          {children}
        </div>
      </aside>
    </div>,
    document.body,
  );
}
