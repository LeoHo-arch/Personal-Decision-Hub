import { ChevronRight } from "lucide-react";
import { formatTimeLabel } from "@/lib/news";
import type { NewsItem } from "@/types/news";
import { ImportanceBadge, RegionTag, TopicTag } from "@/components/news/NewsBadges";

interface NewsCardProps {
  item: NewsItem;
  onOpen: (id: string) => void;
}

export function NewsCard({ item, onOpen }: NewsCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-snug text-slate-800">
          <button
            type="button"
            onClick={() => onOpen(item.id)}
            className="text-left transition-colors hover:text-sky-700"
          >
            {item.title}
          </button>
        </h3>
        <ImportanceBadge importance={item.importance} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <RegionTag region={item.region} />
        <TopicTag topic={item.primaryTopic} />
        <span className="text-xs text-gray-400">
          {item.sourceNames.join("、")} · {formatTimeLabel(item.publishedAt)} · 演示数据
        </span>
      </div>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
        {item.summary}
      </p>

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={() => onOpen(item.id)}
          className="inline-flex items-center gap-0.5 text-sm font-medium text-sky-700 hover:underline"
        >
          查看详情
          <ChevronRight size={16} />
        </button>
      </div>
    </article>
  );
}
