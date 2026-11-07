import { ChevronLeft } from "lucide-react";
import { EmptyState, SectionCard } from "@/components/wireframe";
import { NewsDetailContent, NewsDetailHeader } from "@/components/news/NewsDetailContent";
import { MOCK_NEWS } from "@/data/mockNews";

interface NewsDetailPageProps {
  newsId: string | null;
  onBack: () => void;
}

export function NewsDetailPage({ newsId, onBack }: NewsDetailPageProps) {
  const item = MOCK_NEWS.find((n) => n.id === newsId);

  return (
    <div className="mx-auto max-w-3xl">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-slate-800"
      >
        <ChevronLeft size={16} />
        返回每日简报
      </button>

      {!item ? (
        <EmptyState message="未找到该消息，请返回简报重新选择" className="h-48" />
      ) : (
        <div className="space-y-4">
          <SectionCard>
            <NewsDetailHeader item={item} />
          </SectionCard>
          <NewsDetailContent item={item} />
        </div>
      )}
    </div>
  );
}
