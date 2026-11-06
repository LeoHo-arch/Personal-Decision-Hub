import { ChevronLeft } from "lucide-react";
import { EmptyState, SectionCard } from "@/components/wireframe";
import { ImportanceBadge, RegionTag, TopicTag } from "@/components/news/NewsBadges";
import { NewsDemoNotice } from "@/components/news/NewsDemoNotice";
import { MOCK_NEWS } from "@/data/mockNews";
import { formatTimeLabel } from "@/lib/news";

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
          <div className="mb-2">
            <NewsDemoNotice />
          </div>

          <SectionCard title="事件概述" description="标题、地区、主题与基本事实">
            <h1 className="text-2xl font-semibold leading-tight text-slate-800">
              {item.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <RegionTag region={item.region} />
              <TopicTag topic={item.primaryTopic} />
              <ImportanceBadge importance={item.importance} />
            </div>
            <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
              <DetailField label="发布时间" value={formatTimeLabel(item.publishedAt)} />
              <DetailField label="事件日期" value={item.eventDate} />
              <DetailField label="报道媒体" value={item.sourceNames.join("、")} />
            </dl>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                  {tag}
                </span>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="事实报道" actions={<KindTag kind="fact" />}>
            <div className="space-y-3 text-sm leading-relaxed text-gray-700">
              <p className="font-medium text-slate-800">事实摘要：{item.summary}</p>
              {item.detail.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <h3 className="mb-2 mt-6 text-sm font-semibold text-slate-800">媒体报道</h3>
            <ul className="divide-y divide-gray-100">
              {item.mediaReports.map((report) => (
                <li key={`${report.source}-${report.publishedAt}`} className="py-3">
                  <p className="text-sm text-slate-800">{report.headline}</p>
                  <p className="mt-1 text-xs text-gray-400">
                    {report.source} · {formatTimeLabel(report.publishedAt)}
                  </p>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="官方信息" description="政府公告、官方文件或当事方回应" actions={<KindTag kind="official" />}>
            {item.officialInformation.length === 0 ? (
              <EmptyState message="暂无官方公开信息" className="h-24" />
            ) : (
              <ul className="space-y-3">
                {item.officialInformation.map((entry) => (
                  <li key={entry.source} className="rounded-md bg-gray-50 p-3 text-sm">
                    <p className="font-medium text-slate-700">{entry.source}</p>
                    <p className="mt-1 text-gray-600">{entry.content}</p>
                  </li>
                ))}
              </ul>
            )}
          </SectionCard>

          <SectionCard title="为什么值得关注" actions={<KindTag kind="analysis" />}>
            <p className="text-sm leading-relaxed text-gray-700">{item.whyItMatters}</p>
          </SectionCard>

          <SectionCard
            title="潜在影响分析"
            description="以下为分析判断，并非已经发生的事实"
            actions={<KindTag kind="analysis" />}
          >
            <ul className="space-y-3">
              {item.potentialImpacts.map((impact) => (
                <li key={impact.area} className="text-sm leading-relaxed text-gray-700">
                  <span className="font-medium text-slate-800">{impact.area}：</span>
                  {impact.content}
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="原始来源" description="原文入口将在接入真实数据后提供">
            <ul className="divide-y divide-gray-100">
              {item.mediaReports.map((report) => (
                <li
                  key={`source-${report.source}-${report.publishedAt}`}
                  className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm"
                >
                  <span className="text-slate-700">
                    {report.source} · {formatTimeLabel(report.publishedAt)}
                  </span>
                  <button
                    type="button"
                    disabled
                    className="rounded-md border border-gray-200 px-3 py-1 text-xs text-gray-400"
                  >
                    原文链接待接入
                  </button>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      )}
    </div>
  );
}

function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-gray-400">{label}</dt>
      <dd className="mt-0.5 text-slate-700">{value}</dd>
    </div>
  );
}

const KIND_LABELS = {
  fact: "事实报道",
  official: "官方声明",
  analysis: "分析判断",
} as const;

function KindTag({ kind }: { kind: keyof typeof KIND_LABELS }) {
  return (
    <span className="whitespace-nowrap rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
      {KIND_LABELS[kind]}
    </span>
  );
}
