import {
  PageHeader,
  SectionCard,
  ChartPlaceholder,
  TablePlaceholder,
  StatCard,
  FilterBar,
  FilterSelect,
  FilterSearch,
  FilterButton,
  EmptyState,
} from "@/components/wireframe";

export function DecisionStocksPage() {
  return (
    <div>
      <PageHeader
        title="股票观察"
        description="自选股行情、估值与关注理由记录。"
        actions={
          <>
            <FilterSelect label="市场" options={["全部", "A股", "港股", "美股"]} />
            <FilterSelect label="排序" options={["按涨跌", "按市值", "按关注度"]} />
            <FilterButton label="添加自选" />
          </>
        }
      />

      <div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="自选股数量" />
        <StatCard label="今日上涨" />
        <StatCard label="今日下跌" />
        <StatCard label="平均涨跌" />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionCard title="自选股票列表" description="已添加的自选股">
            <TablePlaceholder
              columns={["代码", "名称", "现价", "涨跌", "涨跌幅", "市值", "备注"]}
            />
          </SectionCard>
        </div>
        <SectionCard title="股票观察备注" description="关注理由与观察记录">
          <EmptyState message="暂无观察备注" />
        </SectionCard>
      </div>

      <SectionCard title="股票价格表现" description="自选股价格走势对比">
        <ChartPlaceholder label="自选股价格表现图占位" />
      </SectionCard>
    </div>
  );
}

export function DecisionPurchasePage() {
  return (
    <div>
      <PageHeader
        title="购买计划"
        description="待购商品清单、价格目标与购买时机判断。"
        actions={
          <>
            <FilterSelect label="状态" options={["全部", "待购", "观望", "已购", "已取消"]} />
            <FilterSelect label="优先级" options={["全部", "高", "中", "低"]} />
            <FilterButton label="新建计划" />
          </>
        }
      />

      <div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="待购总数" />
        <StatCard label="预算总额" />
        <StatCard label="已达目标价" />
        <StatCard label="本月已购" />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionCard title="计划商品列表" description="待购与追踪商品">
            <TablePlaceholder
              columns={["商品", "分类", "当前价", "目标价", "预算", "优先级", "状态"]}
            />
          </SectionCard>
        </div>
        <SectionCard title="购买计划状态" description="按状态分布">
          <div className="space-y-3">
            {["待购", "观望", "已购", "已取消"].map((s) => (
              <div key={s} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{s}</span>
                <div className="h-2 w-24 rounded bg-gray-100" />
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="预算与目标价格" description="预算使用与目标价达成概览">
        <ChartPlaceholder label="预算与目标价对比图占位" />
      </SectionCard>
    </div>
  );
}

export function DecisionLogPage() {
  return (
    <div>
      <PageHeader
        title="决策记录"
        description="个人决策日志、依据复盘与回顾。"
        actions={
          <>
            <FilterSelect label="分类" options={["全部", "投资", "购买", "宏观判断", "其他"]} />
            <FilterButton label="新建记录" />
          </>
        }
      />

      <div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="决策总数" />
        <StatCard label="本月新增" />
        <StatCard label="已复盘" />
        <StatCard label="待复盘" />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionCard title="决策记录列表" description="全部决策日志">
            <TablePlaceholder
              columns={["标题", "分类", "时间", "状态", "备注"]}
            />
          </SectionCard>
        </div>
        <SectionCard title="决策分类" description="按分类统计">
          <div className="space-y-3">
            {["投资", "购买", "宏观判断", "其他"].map((c) => (
              <div key={c} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{c}</span>
                <div className="h-2 w-24 rounded bg-gray-100" />
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="时间和备注区域" description="决策时间线与复盘备注">
        <EmptyState message="暂无复盘备注" />
      </SectionCard>
    </div>
  );
}
