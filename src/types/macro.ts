import type { SeriesPoint } from "@/types/series";

export type MacroRegion = "china" | "us";

export interface MacroIndicator {
  id: string;
  name: string;
  region: MacroRegion;
  definition: string;
  unit: string;
  basis: string;
  source: string;
  interpretation: string;
  series: SeriesPoint[];
}
