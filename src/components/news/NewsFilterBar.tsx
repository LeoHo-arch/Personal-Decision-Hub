import { FilterBar, FilterSelect } from "@/components/wireframe";
import {
  IMPORTANCE_FILTER_OPTIONS,
  REGION_FILTER_OPTIONS,
  TOPIC_FILTER_OPTIONS,
} from "@/lib/news";
import type { NewsFilterState, NewsImportance, NewsRegion, NewsTopic } from "@/types/news";

interface NewsFilterBarProps {
  value: NewsFilterState;
  onChange: (next: NewsFilterState) => void;
}

export function NewsFilterBar({ value, onChange }: NewsFilterBarProps) {
  return (
    <FilterBar>
      <FilterSelect
        label="地区"
        options={REGION_FILTER_OPTIONS}
        value={value.region}
        onChange={(region) => onChange({ ...value, region: region as NewsRegion | "all" })}
      />
      <FilterSelect
        label="主题"
        options={TOPIC_FILTER_OPTIONS}
        value={value.topic}
        onChange={(topic) => onChange({ ...value, topic: topic as NewsTopic | "all" })}
      />
      <FilterSelect
        label="重要程度"
        options={IMPORTANCE_FILTER_OPTIONS}
        value={value.importance}
        onChange={(importance) =>
          onChange({ ...value, importance: importance as NewsImportance | "all" })
        }
      />
    </FilterBar>
  );
}
