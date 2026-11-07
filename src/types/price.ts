import type { SeriesPoint } from "@/types/series";

export type PriceCategory = "digital" | "food" | "energy";

export interface PriceProduct {
  id: string;
  name: string;
  spec: string;
  category: PriceCategory;
  unit: string;
  source: string;
  notes: string;
  series: SeriesPoint[];
}
