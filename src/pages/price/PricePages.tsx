import {
  PageHeader,
  SectionCard,
  TablePlaceholder,
  StatCard,
  FilterBar,
  FilterSelect,
  FilterSearch,
  FilterButton,
} from "@/components/wireframe";
import { DetailTrigger } from "@/components/shared/DetailTrigger";
import { TrendChart } from "@/components/shared/TrendChart";
import { PriceProductTable } from "@/components/price/PriceProductTable";
import {
  DIGITAL_HEADPHONE,
  DIGITAL_LAPTOP,
  DIGITAL_PHONE,
  ENERGY_COPPER,
  ENERGY_GAS,
  ENERGY_GOLD,
  ENERGY_OIL,
  FOOD_DETERGENT,
  FOOD_EGG,
  FOOD_OIL,
  FOOD_RICE,
} from "@/data/mockPrice";
import { latestStat } from "@/lib/trends";
import type { DetailRef } from "@/types/detail";
import type { PriceProduct } from "@/types/price";
import { Smartphone, ShoppingBasket, Fuel } from "lucide-react";

interface PricePageProps {
  onOpenDetail: (ref: DetailRef) => void;
}

function openPrice(onOpenDetail: PricePageProps["onOpenDetail"], item: PriceProduct) {
  return () => onOpenDetail({ kind: "price", id: item.id });
}

function PriceTrendCard({
  title,
  description,
  item,
  onOpenDetail,
}: PricePageProps & { title: string; description: string; item: PriceProduct }) {
  return (
    <SectionCard title={title} description={description}>
      <DetailTrigger onOpen={openPrice(onOpenDetail, item)} className="p-1">
        <TrendChart series={item.series} label={`${item.name}价格趋势图`} />
        <p className="mt-3 text-center text-xs text-gray-400">
          展示：{item.name}，点击查看商品详情
        </p>
      </DetailTrigger>
    </SectionCard>
  );
}

export function PriceOverviewPage({ onOpenDetail }: PricePageProps) {
  return (
    <div>
      <PageHeader
        title="价格总览"
        description="数码产品、食品日用品与能源大宗商品价格总览。"
        actions={
          <>
            <FilterSelect label="分类" options={["全部", "数码产品", "食品日用品", "能源大宗"]} />
            <FilterButton label="刷新" />
          </>
        }
      />

      <div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="重点商品均价" />
        <StatCard label="本周降价数" />
        <StatCard label="本周涨价数" />
        <StatCard label="追踪商品总数" />
      </div>

      <div className="mb-4">
        <SectionCard title="近期降价商品" description="最近出现降价的商品">
          <TablePlaceholder
            columns={["商品名称", "分类", "当前价", "原价", "降幅", "更新时间"]}
          />
        </SectionCard>
      </div>

      <div className="mb-4">
        <PriceTrendCard
          title="商品价格趋势"
          description="重点商品价格走势"
          item={ENERGY_OIL}
          onOpenDetail={onOpenDetail}
        />
      </div>

      <SectionCard title="商品分类入口" description="点击卡片查看各分类的代表商品">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <DetailTrigger onOpen={openPrice(onOpenDetail, DIGITAL_PHONE)}>
            <CategoryEntry icon={<Smartphone size={20} />} label="数码产品" desc="手机、电脑、相机等" />
          </DetailTrigger>
          <DetailTrigger onOpen={openPrice(onOpenDetail, FOOD_OIL)}>
            <CategoryEntry icon={<ShoppingBasket size={20} />} label="食品与日用品" desc="食品饮料、日用品" />
          </DetailTrigger>
          <DetailTrigger onOpen={openPrice(onOpenDetail, ENERGY_OIL)}>
            <CategoryEntry icon={<Fuel size={20} />} label="能源与大宗商品" desc="原油、金属等" />
          </DetailTrigger>
        </div>
      </SectionCard>
    </div>
  );
}

function CategoryEntry({ icon, label, desc }: { icon: React.ReactNode; label: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-gray-100 bg-gray-50 p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-slate-600 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-700">{label}</p>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

export function PriceDigitalPage({ onOpenDetail }: PricePageProps) {
  const digitalProducts = [DIGITAL_PHONE, DIGITAL_LAPTOP, DIGITAL_HEADPHONE];

  return (
    <div>
      <PageHeader
        title="数码产品"
        description="手机、电脑、相机等数码产品价格追踪。"
        actions={<FilterButton label="添加追踪" />}
      />

      <FilterBar className="mb-4">
        <FilterSearch />
        <FilterSelect label="分类" options={["全部", "手机", "笔记本", "平板", "相机", "耳机"]} />
        <FilterSelect label="品牌" options={["全部品牌", "Apple", "华为", "小米", "三星"]} />
        <FilterSelect label="价格区间" options={["不限", "0-2000", "2000-5000", "5000-10000", "10000+"]} />
      </FilterBar>

      <div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="追踪商品数" />
        <StatCard label="本周降价" />
        <StatCard label="本周涨价" />
        <StatCard label="价格稳定数" />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SectionCard title="商品价格变化概览" description="近期价格变动排行">
          <TablePlaceholder columns={["商品", "当前价", "涨跌", "涨跌幅"]} />
        </SectionCard>
        <PriceTrendCard
          title="商品价格历史趋势"
          description="选中商品价格走势"
          item={DIGITAL_PHONE}
          onOpenDetail={onOpenDetail}
        />
      </div>

      <SectionCard title="商品追踪列表" description="点击商品名称查看详情">
        <PriceProductTable
          products={digitalProducts}
          onOpen={(id) => onOpenDetail({ kind: "price", id })}
        />
      </SectionCard>
    </div>
  );
}

export function PriceFoodPage({ onOpenDetail }: PricePageProps) {
  const foodProducts = [FOOD_OIL, FOOD_RICE, FOOD_EGG, FOOD_DETERGENT];

  return (
    <div>
      <PageHeader
        title="食品与日用品"
        description="食品饮料及日常用品价格趋势追踪。"
        actions={<FilterButton label="添加追踪" />}
      />

      <FilterBar className="mb-4">
        <FilterSearch />
        <FilterSelect label="分类" options={["全部", "粮油", "肉类", "蔬果", "乳制品", "日用清洁"]} />
        <FilterSelect label="品牌" options={["全部品牌"]} />
        <FilterSelect label="规格" options={["全部规格"]} />
      </FilterBar>

      <div className="mb-4">
        <SectionCard title="商品价格概览" description="追踪商品价格一览">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <StatCard label="追踪商品数" />
            <StatCard label="本周降价" />
            <StatCard label="平均价格变动" />
            <StatCard label="追踪品牌数" />
          </div>
        </SectionCard>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SectionCard title="品牌及规格比较" description="同类商品不同品牌/规格对比">
          <TablePlaceholder columns={["品牌", "规格", "价格", "单位价", "差异"]} />
        </SectionCard>
        <PriceTrendCard
          title="商品历史价格趋势"
          description="价格走势"
          item={FOOD_OIL}
          onOpenDetail={onOpenDetail}
        />
      </div>

      <SectionCard title="商品追踪列表" description="点击商品名称查看详情">
        <PriceProductTable
          products={foodProducts}
          onOpen={(id) => onOpenDetail({ kind: "price", id })}
        />
      </SectionCard>
    </div>
  );
}

export function PriceEnergyPage({ onOpenDetail }: PricePageProps) {
  const oil = latestStat(ENERGY_OIL.series, ENERGY_OIL.unit);
  const gas = latestStat(ENERGY_GAS.series, ENERGY_GAS.unit);
  const gold = latestStat(ENERGY_GOLD.series, ENERGY_GOLD.unit);
  const copper = latestStat(ENERGY_COPPER.series, ENERGY_COPPER.unit);

  return (
    <div>
      <PageHeader
        title="能源与大宗商品"
        description="原油、天然气、黄金、铜等能源与大宗商品价格。"
        actions={<FilterButton label="添加追踪" />}
      />

      <FilterBar className="mb-4">
        <FilterSelect
          label="商品分类"
          options={["全部", "原油", "天然气", "贵金属", "基本金属", "农产品"]}
        />
        <FilterSelect label="时间范围" options={["近1月", "近3月", "近1年", "全部"]} />
      </FilterBar>

      <div className="mb-4">
        <SectionCard title="主要商品价格概览" description="点击卡片查看商品详情">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <DetailTrigger onOpen={openPrice(onOpenDetail, ENERGY_OIL)}>
              <StatCard label="原油 (WTI)" value={oil.value} change={oil.change} />
            </DetailTrigger>
            <DetailTrigger onOpen={openPrice(onOpenDetail, ENERGY_GAS)}>
              <StatCard label="天然气" value={gas.value} change={gas.change} />
            </DetailTrigger>
            <DetailTrigger onOpen={openPrice(onOpenDetail, ENERGY_GOLD)}>
              <StatCard label="黄金" value={gold.value} change={gold.change} />
            </DetailTrigger>
            <DetailTrigger onOpen={openPrice(onOpenDetail, ENERGY_COPPER)}>
              <StatCard label="铜" value={copper.value} change={copper.change} />
            </DetailTrigger>
          </div>
        </SectionCard>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <PriceTrendCard
          title="历史价格趋势"
          description="主要商品价格走势"
          item={ENERGY_OIL}
          onOpenDetail={onOpenDetail}
        />
        <SectionCard title="商品比较" description="点击商品名称查看详情">
          <PriceProductTable
            products={[ENERGY_OIL, ENERGY_GAS, ENERGY_GOLD, ENERGY_COPPER]}
            onOpen={(id) => onOpenDetail({ kind: "price", id })}
          />
        </SectionCard>
      </div>
    </div>
  );
}
