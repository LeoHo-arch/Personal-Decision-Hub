import { DetailDrawer } from "@/components/shared/DetailDrawer";
import { NewsDetailContent, NewsDetailHeader } from "@/components/news/NewsDetailContent";
import { MacroDetailContent, MacroDetailHeader } from "@/components/macro/MacroDetailContent";
import { PriceDetailContent, PriceDetailHeader } from "@/components/price/PriceDetailContent";
import type { DetailTarget } from "@/types/detail";

interface DetailHostProps {
  open: boolean;
  target: DetailTarget | null;
  onClose: () => void;
}

export function DetailHost({ open, target, onClose }: DetailHostProps) {
  if (!target) return null;

  switch (target.kind) {
    case "news":
      return (
        <DetailDrawer
          open={open}
          onClose={onClose}
          label="新闻详情"
          header={<NewsDetailHeader item={target.item} />}
        >
          <NewsDetailContent item={target.item} />
        </DetailDrawer>
      );
    case "macro":
      return (
        <DetailDrawer
          open={open}
          onClose={onClose}
          label="宏观指标详情"
          header={<MacroDetailHeader item={target.item} />}
        >
          <MacroDetailContent item={target.item} />
        </DetailDrawer>
      );
    case "price":
      return (
        <DetailDrawer
          open={open}
          onClose={onClose}
          label="价格详情"
          header={<PriceDetailHeader item={target.item} />}
        >
          <PriceDetailContent item={target.item} />
        </DetailDrawer>
      );
  }
}
