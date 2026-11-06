import { useEffect, useRef, useState, type Ref } from "react";
import { Pause, Play } from "lucide-react";
import { ImportanceBadge, RegionTag } from "@/components/news/NewsBadges";
import type { NewsItem } from "@/types/news";

const SCROLL_SPEED_PX_PER_MS = 0.04;

interface NewsTickerProps {
  items: NewsItem[];
  onOpenNews: (id: string) => void;
}

export function NewsTicker({ items, onOpenNews }: NewsTickerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [loop, setLoop] = useState(false);
  const [manualPaused, setManualPaused] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [hovered, setHovered] = useState(false);
  const [touching, setTouching] = useState(false);
  const paused = manualPaused || hovered || touching;

  useEffect(() => {
    const container = scrollRef.current;
    const group = groupRef.current;
    if (!container || !group) return;
    const measure = () => setLoop(group.offsetWidth > container.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(group);
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const container = scrollRef.current;
    const group = groupRef.current;
    if (!container || !group || !loop || paused) return;

    let position = container.scrollLeft;
    let last = performance.now();
    let frame = 0;
    const step = (now: number) => {
      position += (now - last) * SCROLL_SPEED_PX_PER_MS;
      last = now;
      const period = group.offsetWidth;
      if (position >= period) position -= period;
      container.scrollLeft = Math.round(position);
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [loop, paused]);

  if (items.length === 0) {
    return (
      <div className="flex h-11 shrink-0 items-center gap-3 border-b border-gray-200 bg-white px-4">
        <span className="text-xs font-medium text-slate-800">今日精选</span>
        <span className="text-xs text-gray-400">今日暂无精选消息</span>
      </div>
    );
  }

  const renderGroup = (ref: Ref<HTMLDivElement> | undefined, hidden: boolean) => (
    <div ref={ref} aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-2 pr-6">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          tabIndex={hidden ? -1 : undefined}
          onClick={() => onOpenNews(item.id)}
          className="flex shrink-0 items-center gap-2 rounded-md px-2 py-1 text-sm text-slate-700 transition-colors hover:bg-gray-100"
        >
          <RegionTag region={item.region} />
          <ImportanceBadge importance={item.importance} />
          <span className="max-w-[28rem] truncate">{item.title}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex h-11 shrink-0 items-center gap-3 border-b border-gray-200 bg-white px-4">
      <span className="shrink-0 rounded bg-slate-800 px-2 py-0.5 text-xs font-semibold text-white">
        今日精选
      </span>
      <div
        ref={scrollRef}
        role="region"
        aria-label="今日精选消息滚动栏"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setTouching(true)}
        onTouchEnd={() => setTouching(false)}
        onTouchCancel={() => setTouching(false)}
        className="flex min-w-0 flex-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-max">
          {renderGroup(groupRef, false)}
          {loop && renderGroup(undefined, true)}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setManualPaused((v) => !v)}
        aria-label={manualPaused ? "恢复滚动" : "暂停滚动"}
        className="shrink-0 rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-slate-800"
      >
        {manualPaused ? <Play size={14} /> : <Pause size={14} />}
      </button>
    </div>
  );
}
