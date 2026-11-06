export type NewsRegion = "china" | "us" | "europe" | "global";

export type NewsTopic = "geopolitics" | "policy" | "trade" | "macro" | "energy";

export type NewsImportance = "high" | "medium" | "normal";

export interface NewsMediaReport {
  source: string;
  headline: string;
  publishedAt: string;
}

export interface NewsOfficialItem {
  source: string;
  content: string;
}

export interface NewsImpact {
  area: string;
  content: string;
}

export interface NewsItem {
  id: string;
  title: string;
  region: NewsRegion;
  primaryTopic: NewsTopic;
  tags: string[];
  importance: NewsImportance;
  summary: string;
  whyItMatters: string;
  sourceNames: string[];
  publishedAt: string;
  eventDate: string;
  detail: string[];
  mediaReports: NewsMediaReport[];
  officialInformation: NewsOfficialItem[];
  potentialImpacts: NewsImpact[];
}

export interface NewsFilterState {
  region: NewsRegion | "all";
  topic: NewsTopic | "all";
  importance: NewsImportance | "all";
}
