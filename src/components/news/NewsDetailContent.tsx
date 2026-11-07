import { SectionCard } from "@/components/wireframe";
import { ImportanceBadge, RegionTag, TopicTag } from "@/components/news/NewsBadges";
import { NewsDemoNotice } from "@/components/news/NewsDemoNotice";
import { formatTimeLabel } from "@/lib/news";
import type { NewsItem } from "@/types/news";

const KIND_LABELS = {
  fact: "事实报道",
  official: "官方声明",
  analysis: "分析判断",
} as const;

export function NewsDetailHeader({ item }: { item: NewsItem }) {
  return (
    <div>
      <h2 className="text-xl font-semibold leading-tight text-slate-800">{item.title}</h2>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <ImportanceBadge importance={item.importance} />
        <RegionTag region={item.region} />
        <TopicTag topic={item.primaryTopic} />
      </div>
      <p className="mt-3 text-xs text-gray-400">
        {item.sourceNames.join("、")} · {formatTimeLabel(item.publishedAt)}
      </p>
    </div>
  );
}

export function NewsDetailContent({ item }: { item: NewsItem }) {
  return (
    <div className="space-y-4">
      <NewsDemoNotice />

      <SectionCard title="事件概述" description="地区、主题与基本事实">
        <p className="text-sm leading-relaxed text-gray-700">{item.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span>事件日期：{item.eventDate}</span>
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-gray-100 px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="事实报道" actions={<KindTag kind="fact" />}>
        <div className="space-y-3 text-sm leading-relaxed text-gray-700">
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

      <SectionCard
        title="官方信息"
        description="政府公告、官方文件或当事方回应"
        actions={<KindTag kind="official" />}
      >
        {item.officialInformation.length === 0 ? (
          <p className="text-sm text-gray-400">暂无官方公开信息</p>
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
  );
}

function KindTag({ kind }: { kind: keyof typeof KIND_LABELS }) {
  return (
    <span className="whitespace-nowrap rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
      {KIND_LABELS[kind]}
    </span>
  );
}
