import { DetailDrawer } from "@/components/shared/DetailDrawer";
import { NewsDetailContent, NewsDetailHeader } from "@/components/news/NewsDetailContent";
import type { NewsItem } from "@/types/news";

export type DetailTarget = { kind: "news"; item: NewsItem };

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
  }
}
