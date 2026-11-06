import type {
  NewsFilterState,
  NewsImportance,
  NewsItem,
  NewsRegion,
  NewsTopic,
} from "@/types/news";

export const REGION_LABELS: Record<NewsRegion, string> = {
  china: "中国",
  us: "美国",
  europe: "欧洲",
  global: "全球",
};

export const TOPIC_LABELS: Record<NewsTopic, string> = {
  geopolitics: "国际政治与地缘关系",
  policy: "政策与政府决策",
  trade: "国际贸易与产业竞争",
  macro: "宏观经济与金融",
  energy: "能源、资源与重大事件",
};

export const IMPORTANCE_LABELS: Record<NewsImportance, string> = {
  high: "高",
  medium: "中",
  normal: "一般",
};

const IMPORTANCE_RANK: Record<NewsImportance, number> = {
  high: 0,
  medium: 1,
  normal: 2,
};

export const EMPTY_NEWS_FILTERS: NewsFilterState = {
  region: "all",
  topic: "all",
  importance: "all",
};

export const REGION_FILTER_OPTIONS = [
  { value: "all", label: "全部地区" },
  ...(Object.keys(REGION_LABELS) as NewsRegion[]).map((value) => ({
    value,
    label: REGION_LABELS[value],
  })),
];

export const TOPIC_FILTER_OPTIONS = [
  { value: "all", label: "全部主题" },
  ...(Object.keys(TOPIC_LABELS) as NewsTopic[]).map((value) => ({
    value,
    label: TOPIC_LABELS[value],
  })),
];

export const IMPORTANCE_FILTER_OPTIONS = [
  { value: "all", label: "全部程度" },
  ...(Object.keys(IMPORTANCE_LABELS) as NewsImportance[]).map((value) => ({
    value,
    label: IMPORTANCE_LABELS[value],
  })),
];

export function newsDateKey(item: NewsItem): string {
  return item.publishedAt.slice(0, 10);
}

export function sortByPublishedDesc(items: NewsItem[]): NewsItem[] {
  return [...items].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getBriefingDates(items: NewsItem[]): string[] {
  return [...new Set(items.map(newsDateKey))].sort((a, b) => b.localeCompare(a));
}

export function getLatestBriefingDate(items: NewsItem[]): string | null {
  return getBriefingDates(items)[0] ?? null;
}

export function getNewsForDate(items: NewsItem[], date: string): NewsItem[] {
  return sortByPublishedDesc(items.filter((item) => newsDateKey(item) === date));
}

export function getFeaturedNews(items: NewsItem[], date: string, limit = 8): NewsItem[] {
  return getNewsForDate(items, date)
    .sort((a, b) => IMPORTANCE_RANK[a.importance] - IMPORTANCE_RANK[b.importance])
    .slice(0, limit);
}

export function filterNews(items: NewsItem[], filters: NewsFilterState): NewsItem[] {
  return items.filter(
    (item) =>
      (filters.region === "all" || item.region === filters.region) &&
      (filters.topic === "all" || item.primaryTopic === filters.topic) &&
      (filters.importance === "all" || item.importance === filters.importance),
  );
}

export function formatDateLabel(date: string): string {
  const [year, month, day] = date.split("-");
  return `${year}年${Number(month)}月${Number(day)}日`;
}

export function formatTimeLabel(iso: string): string {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Shanghai",
  }).format(new Date(iso));
}
