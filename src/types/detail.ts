import type { MacroIndicator } from "@/types/macro";
import type { NewsItem } from "@/types/news";
import type { PriceProduct } from "@/types/price";

export type DetailRef =
  | { kind: "news"; id: string }
  | { kind: "macro"; id: string }
  | { kind: "price"; id: string };

export type DetailTarget =
  | { kind: "news"; item: NewsItem }
  | { kind: "macro"; item: MacroIndicator }
  | { kind: "price"; item: PriceProduct };
