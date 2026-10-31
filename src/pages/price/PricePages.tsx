import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export function PriceOverviewPage() {
  return (
    <PagePlaceholder
      title="价格总览"
      description="数码产品、食品日用品与能源大宗商品价格总览。"
    />
  );
}

export function PriceDigitalPage() {
  return (
    <PagePlaceholder
      title="数码产品"
      description="手机、电脑、相机等数码产品价格追踪。"
    />
  );
}

export function PriceFoodPage() {
  return (
    <PagePlaceholder
      title="食品与日用品"
      description="食品饮料及日常用品价格趋势追踪。"
    />
  );
}

export function PriceEnergyPage() {
  return (
    <PagePlaceholder
      title="能源与大宗商品"
      description="原油、天然气、金属等能源与大宗商品价格。"
    />
  );
}
