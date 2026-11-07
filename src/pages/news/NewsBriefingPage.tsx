import { useState } from "react";
import { PageHeader, EmptyState } from "@/components/wireframe";
import { DetailDrawer } from "@/components/shared/DetailDrawer";
import { NewsCard } from "@/components/news/NewsCard";
import { NewsDemoNotice } from "@/components/news/NewsDemoNotice";
import { NewsDetailContent, NewsDetailHeader } from "@/components/news/NewsDetailContent";
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

export function NewsBriefingPage() {
  const [filters, setFilters] = useState<NewsFilterState>(EMPTY_NEWS_FILTERS);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [detailId, setDetailId] = useState<string | null>(null);

  const briefingDate = getLatestBriefingDate(MOCK_NEWS);
  const featured = briefingDate ? getFeaturedNews(MOCK_NEWS, briefingDate) : [];
  const visible = filterNews(featured, filters);
  const detailItem = MOCK_NEWS.find((n) => n.id === detailId) ?? null;

  const openDetail = (id: string) => {
    setDetailId(id);
    setDrawerOpen(true);
  };

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
            <NewsCard key={item.id} item={item} onOpen={openDetail} />
          ))}
        </div>
      )}

      <DetailDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        label="新闻详情"
        header={detailItem && <NewsDetailHeader item={detailItem} />}
      >
        {detailItem && <NewsDetailContent item={detailItem} />}
      </DetailDrawer>
    </div>
  );
}
