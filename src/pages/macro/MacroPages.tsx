import {
  PageHeader,
  SectionCard,
  ChartPlaceholder,
  TablePlaceholder,
  StatCard,
  FilterBar,
  FilterSelect,
  FilterButton,
} from "@/components/wireframe";
import { RefreshCw } from "lucide-react";

export function MacroOverviewPage() {
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
        <StatCard label="GDP 增速" />
        <StatCard label="CPI 同比" />
        <StatCard label="PPI 同比" />
        <StatCard label="PMI" />
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
        <SectionCard title="主要宏观经济趋势" description="关键宏观指标走势">
          <ChartPlaceholder label="宏观经济趋势图占位" />
        </SectionCard>
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

export function MacroChinaPage() {
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
        <StatCard label="GDP 同比" />
        <StatCard label="CPI 同比" />
        <StatCard label="PPI 同比" />
        <StatCard label="PMI" />
      </div>

      <div className="mb-4">
        <SectionCard title="经济指标历史趋势" description="各指标历史走势对比">
          <ChartPlaceholder label="中国经济指标历史趋势图占位" />
        </SectionCard>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SectionCard title="指标明细" description="按指标分类查看">
          <TablePlaceholder
            columns={["指标", "最新值", "同比", "环比", "发布日期"]}
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

export function MacroUsPage() {
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
        <StatCard label="GDP 同比" />
        <StatCard label="CPI 同比" />
        <StatCard label="失业率" />
        <StatCard label="联邦基金利率" />
      </div>

      <div className="mb-4">
        <SectionCard title="经济指标趋势" description="主要指标历史走势">
          <ChartPlaceholder label="美国经济指标趋势图占位" />
        </SectionCard>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SectionCard title="指标明细" description="按指标分类查看">
          <TablePlaceholder
            columns={["指标", "最新值", "同比", "环比", "发布日期"]}
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
