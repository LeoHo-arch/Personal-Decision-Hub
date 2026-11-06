import { useState } from "react";
import { PageHeader, EmptyState } from "@/components/wireframe";
import { NewsCard } from "@/components/news/NewsCard";
import { NewsDemoNotice } from "@/components/news/NewsDemoNotice";
import { NewsFilterBar } from "@/components/news/NewsFilterBar";
import { MOCK_NEWS } from "@/data/mockNews";
import {
  EMPTY_NEWS_FILTERS,
  filterNews,
  formatDateLabel,
  getFeaturedNews,
  getLatestBriefingDate,
} from "@/lib/news";
import type { NewsFilterState } from "@/types/news";

interface NewsBriefingPageProps {
  onOpenNews: (id: string) => void;
}

export function NewsBriefingPage({ onOpenNews }: NewsBriefingPageProps) {
  const [filters, setFilters] = useState<NewsFilterState>(EMPTY_NEWS_FILTERS);

  const briefingDate = getLatestBriefingDate(MOCK_NEWS);
  const featured = briefingDate ? getFeaturedNews(MOCK_NEWS, briefingDate) : [];
  const visible = filterNews(featured, filters);

  return (
    <div>
      <PageHeader title="每日国际消息简报" description="DAILY GLOBAL BRIEFING" />

      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
        <span className="font-medium text-slate-800">
          {briefingDate ? formatDateLabel(briefingDate) : "暂无简报日期"}
        </span>
        <span>精选 {featured.length} 条消息</span>
      </div>

      <div className="mb-4">
        <NewsDemoNotice />
      </div>

      <div className="mb-6">
        <NewsFilterBar value={filters} onChange={setFilters} />
      </div>

      {visible.length === 0 ? (
        <EmptyState message="没有符合当前筛选条件的消息" className="h-48" />
      ) : (
        <div className="space-y-4">
          {visible.map((item) => (
            <NewsCard key={item.id} item={item} onOpen={onOpenNews} />
          ))}
        </div>
      )}
    </div>
  );
}
