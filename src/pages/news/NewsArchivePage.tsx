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
  getBriefingDates,
  getLatestBriefingDate,
  getNewsForDate,
  sortByPublishedDesc,
} from "@/lib/news";
import type { NewsFilterState } from "@/types/news";

interface NewsArchivePageProps {
  onOpenNews: (id: string) => void;
}

const ALL_DATES = "all";

export function NewsArchivePage({ onOpenNews }: NewsArchivePageProps) {
  const dates = getBriefingDates(MOCK_NEWS);
  const [selectedDate, setSelectedDate] = useState<string>(
    getLatestBriefingDate(MOCK_NEWS) ?? ALL_DATES,
  );
  const [filters, setFilters] = useState<NewsFilterState>(EMPTY_NEWS_FILTERS);

  const dateItems =
    selectedDate === ALL_DATES
      ? sortByPublishedDesc(MOCK_NEWS)
      : getNewsForDate(MOCK_NEWS, selectedDate);
  const visible = filterNews(dateItems, filters);

  return (
    <div>
      <PageHeader
        title="历史消息档案"
        description="按日期浏览历史简报，并按地区、主题和重要程度筛选。"
      />

      <div className="mb-4">
        <NewsDemoNotice />
      </div>

      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        <DateChip
          label="全部日期"
          count={MOCK_NEWS.length}
          active={selectedDate === ALL_DATES}
          onClick={() => setSelectedDate(ALL_DATES)}
        />
        {dates.map((date) => (
          <DateChip
            key={date}
            label={formatDateLabel(date)}
            count={getNewsForDate(MOCK_NEWS, date).length}
            active={selectedDate === date}
            onClick={() => setSelectedDate(date)}
          />
        ))}
      </div>

      <div className="mb-4">
        <NewsFilterBar value={filters} onChange={setFilters} />
      </div>

      <p className="mb-3 text-xs text-gray-400">共 {visible.length} 条消息</p>

      {visible.length === 0 ? (
        <EmptyState message="没有符合当前条件的历史消息" className="h-48" />
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

function DateChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-md border px-3 py-1.5 text-sm transition-colors ${
        active
          ? "border-slate-800 bg-slate-800 text-white"
          : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
      }`}
    >
      {label}
      <span className={`ml-2 text-xs ${active ? "text-gray-300" : "text-gray-400"}`}>
        {count}
      </span>
    </button>
  );
}
