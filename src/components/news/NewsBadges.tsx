import { IMPORTANCE_LABELS, REGION_LABELS, TOPIC_LABELS } from "@/lib/news";
import type { NewsImportance, NewsRegion, NewsTopic } from "@/types/news";

const IMPORTANCE_STYLES: Record<NewsImportance, string> = {
  high: "bg-rose-50 text-rose-700 ring-rose-200",
  medium: "bg-amber-50 text-amber-700 ring-amber-200",
  normal: "bg-gray-100 text-gray-600 ring-gray-200",
};

export function RegionTag({ region }: { region: NewsRegion }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-md bg-sky-50 px-2 py-0.5 text-xs font-medium text-sky-700">
      {REGION_LABELS[region]}
    </span>
  );
}

export function TopicTag({ topic }: { topic: NewsTopic }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
      {TOPIC_LABELS[topic]}
    </span>
  );
}

export function ImportanceBadge({ importance }: { importance: NewsImportance }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${IMPORTANCE_STYLES[importance]}`}
    >
      {IMPORTANCE_LABELS[importance]}
    </span>
  );
}
