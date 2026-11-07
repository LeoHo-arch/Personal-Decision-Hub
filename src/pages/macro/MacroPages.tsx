import {
  PageHeader,
  SectionCard,
  ChartPlaceholder,
  TablePlaceholder,
  StatCard,
  FilterSelect,
  FilterButton,
} from "@/components/wireframe";
import { DetailTrigger } from "@/components/shared/DetailTrigger";
import { TrendChart } from "@/components/shared/TrendChart";
import { MacroIndicatorTable } from "@/components/macro/MacroIndicatorTable";
import { CN_CPI, CN_GDP, CN_PMI, CN_PPI, US_CPI, US_FED_RATE, US_GDP, US_UNEMPLOYMENT } from "@/data/mockMacro";
import { latestStat } from "@/lib/trends";
import type { DetailRef } from "@/types/detail";
import type { MacroIndicator } from "@/types/macro";

interface MacroPageProps {
  onOpenDetail: (ref: DetailRef) => void;
}

function openMacro(onOpenDetail: MacroPageProps["onOpenDetail"], item: MacroIndicator) {
  return () => onOpenDetail({ kind: "macro", id: item.id });
}

function MacroTrendCard({
  title,
  description,
  item,
  onOpenDetail,
}: MacroPageProps & { title: string; description: string; item: MacroIndicator }) {
  return (
    <SectionCard title={title} description={description}>
      <DetailTrigger onOpen={openMacro(onOpenDetail, item)} className="p-1">
        <TrendChart series={item.series} label={`${item.name}趋势图`} />
        <p className="mt-3 text-center text-xs text-gray-400">
          展示：{item.name}，点击查看指标详情
        </p>
      </DetailTrigger>
    </SectionCard>
  );
}

export function MacroOverviewPage({ onOpenDetail }: MacroPageProps) {
  const gdp = latestStat(CN_GDP.series, CN_GDP.unit);
  const cpi = latestStat(CN_CPI.series, CN_CPI.unit);
  const ppi = latestStat(CN_PPI.series, CN_PPI.unit);
  const pmi = latestStat(CN_PMI.series, CN_PMI.unit);

  return (
    <div>
      <PageHeader
        title="宏观经济总览"
        description="中国、美国与全球宏观经济指标汇总。"
        actions={
          <>
            <FilterSelect label="时间范围" options={["近1月", "近3月", "近1年", "全部"]} />
            <FilterButton label="刷新" />
          </>
        }
      />

      <div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <DetailTrigger onOpen={openMacro(onOpenDetail, CN_GDP)}>
          <StatCard label="GDP 增速" value={gdp.value} change={gdp.change} />
        </DetailTrigger>
        <DetailTrigger onOpen={openMacro(onOpenDetail, CN_CPI)}>
          <StatCard label="CPI 同比" value={cpi.value} change={cpi.change} />
        </DetailTrigger>
        <DetailTrigger onOpen={openMacro(onOpenDetail, CN_PPI)}>
          <StatCard label="PPI 同比" value={ppi.value} change={ppi.change} />
        </DetailTrigger>
        <DetailTrigger onOpen={openMacro(onOpenDetail, CN_PMI)}>
          <StatCard label="PMI" value={pmi.value} change={pmi.change} />
        </DetailTrigger>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <SectionCard title="中国经济观察" description="核心指标简要概览">
          <div className="space-y-2 text-sm text-gray-500">
            <p>GDP、CPI、PPI、社融等关键指标。</p>
          </div>
        </SectionCard>
        <SectionCard title="美国经济观察" description="利率、通胀、就业概览">
          <div className="space-y-2 text-sm text-gray-500">
            <p>联邦基金利率、CPI、失业率等。</p>
          </div>
        </SectionCard>
        <SectionCard title="全球经济观察" description="主要经济体概览">
          <div className="space-y-2 text-sm text-gray-500">
            <p>主要国家与区域经济运行情况。</p>
          </div>
        </SectionCard>
      </div>

      <div className="mb-4">
        <MacroTrendCard
          title="主要宏观经济趋势"
          description="关键宏观指标走势"
          item={CN_CPI}
          onOpenDetail={onOpenDetail}
        />
      </div>

      <SectionCard title="最新经济数据发布" description="近期发布的重要经济数据">
        <TablePlaceholder
          columns={["数据名称", "国家/地区", "发布时间", "数值", "前值"]}
          rows={0}
          caption="暂无数据发布"
        />
      </SectionCard>
    </div>
  );
}

export function MacroChinaPage({ onOpenDetail }: MacroPageProps) {
  const gdp = latestStat(CN_GDP.series, CN_GDP.unit);
  const cpi = latestStat(CN_CPI.series, CN_CPI.unit);
  const ppi = latestStat(CN_PPI.series, CN_PPI.unit);
  const pmi = latestStat(CN_PMI.series, CN_PMI.unit);

  return (
    <div>
      <PageHeader
        title="中国经济"
        description="GDP、CPI、PPI、社融、PMI 等中国经济核心指标。"
        actions={
          <>
            <FilterSelect label="指标分类" options={["全部", "GDP", "CPI", "PPI", "PMI", "社融"]} />
            <FilterSelect label="时间范围" options={["近1月", "近3月", "近1年", "全部"]} />
            <FilterButton label="刷新" />
          </>
        }
      />

      <div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <DetailTrigger onOpen={openMacro(onOpenDetail, CN_GDP)}>
          <StatCard label="GDP 同比" value={gdp.value} change={gdp.change} />
        </DetailTrigger>
        <DetailTrigger onOpen={openMacro(onOpenDetail, CN_CPI)}>
          <StatCard label="CPI 同比" value={cpi.value} change={cpi.change} />
        </DetailTrigger>
        <DetailTrigger onOpen={openMacro(onOpenDetail, CN_PPI)}>
          <StatCard label="PPI 同比" value={ppi.value} change={ppi.change} />
        </DetailTrigger>
        <DetailTrigger onOpen={openMacro(onOpenDetail, CN_PMI)}>
          <StatCard label="PMI" value={pmi.value} change={pmi.change} />
        </DetailTrigger>
      </div>

      <div className="mb-4">
        <MacroTrendCard
          title="经济指标历史趋势"
          description="各指标历史走势对比"
          item={CN_GDP}
          onOpenDetail={onOpenDetail}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SectionCard title="指标明细" description="按指标分类查看">
          <MacroIndicatorTable
            indicators={[CN_GDP, CN_CPI, CN_PPI, CN_PMI]}
            onOpen={(id) => onOpenDetail({ kind: "macro", id })}
          />
        </SectionCard>
        <SectionCard title="最新数据及发布时间" description="近期数据发布计划">
          <TablePlaceholder
            columns={["数据名称", "发布时间", "预期", "前值"]}
          />
        </SectionCard>
      </div>
    </div>
  );
}

export function MacroUsPage({ onOpenDetail }: MacroPageProps) {
  const gdp = latestStat(US_GDP.series, US_GDP.unit);
  const cpi = latestStat(US_CPI.series, US_CPI.unit);
  const unemployment = latestStat(US_UNEMPLOYMENT.series, US_UNEMPLOYMENT.unit);
  const fedRate = latestStat(US_FED_RATE.series, US_FED_RATE.unit);

  return (
    <div>
      <PageHeader
        title="美国经济"
        description="利率、通胀、就业、消费等美国经济核心指标。"
        actions={
          <>
            <FilterSelect label="指标分类" options={["全部", "GDP", "CPI", "失业率", "利率"]} />
            <FilterSelect label="时间范围" options={["近1月", "近3月", "近1年", "全部"]} />
            <FilterButton label="刷新" />
          </>
        }
      />

      <div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <DetailTrigger onOpen={openMacro(onOpenDetail, US_GDP)}>
          <StatCard label="GDP 环比折年率" value={gdp.value} change={gdp.change} />
        </DetailTrigger>
        <DetailTrigger onOpen={openMacro(onOpenDetail, US_CPI)}>
          <StatCard label="CPI 同比" value={cpi.value} change={cpi.change} />
        </DetailTrigger>
        <DetailTrigger onOpen={openMacro(onOpenDetail, US_UNEMPLOYMENT)}>
          <StatCard label="失业率" value={unemployment.value} change={unemployment.change} />
        </DetailTrigger>
        <DetailTrigger onOpen={openMacro(onOpenDetail, US_FED_RATE)}>
          <StatCard label="联邦基金利率" value={fedRate.value} change={fedRate.change} />
        </DetailTrigger>
      </div>

      <div className="mb-4">
        <MacroTrendCard
          title="经济指标趋势"
          description="主要指标历史走势"
          item={US_CPI}
          onOpenDetail={onOpenDetail}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SectionCard title="指标明细" description="按指标分类查看">
          <MacroIndicatorTable
            indicators={[US_GDP, US_CPI, US_UNEMPLOYMENT, US_FED_RATE]}
            onOpen={(id) => onOpenDetail({ kind: "macro", id })}
          />
        </SectionCard>
        <SectionCard title="最新数据发布" description="近期数据发布时间表">
          <TablePlaceholder
            columns={["数据名称", "发布时间", "预期", "前值"]}
          />
        </SectionCard>
      </div>
    </div>
  );
}

export function MacroGlobalPage() {
  return (
    <div>
      <PageHeader
        title="全球市场"
        description="全球主要股指、汇率、大宗商品及跨境资金流向。"
        actions={
          <>
            <FilterSelect label="区域" options={["全部", "美洲", "欧洲", "亚太", "新兴市场"]} />
            <FilterButton label="刷新" />
          </>
        }
      />

      <div className="mb-4">
        <SectionCard title="主要国家和地区经济观察" description="全球主要经济体概览">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {["美国", "欧元区", "日本", "中国", "印度", "新兴市场"].map((r) => (
              <div
                key={r}
                className="rounded-md border border-gray-100 bg-gray-50 p-3"
              >
                <p className="text-sm font-medium text-slate-700">{r}</p>
                <div className="mt-2 space-y-1.5">
                  <div className="h-2.5 w-3/4 rounded bg-gray-200" />
                  <div className="h-2.5 w-1/2 rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <SectionCard title="汇率" description="主要货币对">
          <TablePlaceholder columns={["货币对", "最新", "涨跌"]} rows={3} />
        </SectionCard>
        <SectionCard title="主要股票市场" description="全球股指">
          <TablePlaceholder columns={["指数", "最新", "涨跌"]} rows={3} />
        </SectionCard>
        <SectionCard title="大宗商品" description="主要商品价格">
          <TablePlaceholder columns={["商品", "最新", "涨跌"]} rows={3} />
        </SectionCard>
      </div>

      <SectionCard title="全球市场趋势" description="综合市场走势">
        <ChartPlaceholder label="全球市场趋势图占位" />
      </SectionCard>
    </div>
  );
}
