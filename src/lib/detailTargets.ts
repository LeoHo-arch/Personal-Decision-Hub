import { MOCK_NEWS } from "@/data/mockNews";
import { MACRO_INDICATORS } from "@/data/mockMacro";
import { PRICE_PRODUCTS } from "@/data/mockPrice";
import type { DetailRef, DetailTarget } from "@/types/detail";

export function resolveDetailTarget(ref: DetailRef): DetailTarget | null {
  switch (ref.kind) {
    case "news": {
      const item = MOCK_NEWS.find((n) => n.id === ref.id);
      return item ? { kind: "news", item } : null;
    }
    case "macro": {
      const item = MACRO_INDICATORS.find((m) => m.id === ref.id);
      return item ? { kind: "macro", item } : null;
    }
    case "price": {
      const item = PRICE_PRODUCTS.find((p) => p.id === ref.id);
      return item ? { kind: "price", item } : null;
    }
  }
}
