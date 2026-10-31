import {
  LayoutDashboard,
  Globe2,
  TrendingUp,
  CircleDollarSign,
  Smartphone,
  ShoppingBasket,
  Fuel,
  Landmark,
  Flag,
  Earth,
  Eye,
  ShoppingCart,
  NotebookPen,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type NavItemId =
  | "dashboard"
  | "macro-overview"
  | "macro-china"
  | "macro-us"
  | "macro-global"
  | "price-overview"
  | "price-digital"
  | "price-food"
  | "price-energy"
  | "decision-stocks"
  | "decision-purchase"
  | "decision-log"
  | "settings";

export interface NavItem {
  id: NavItemId;
  label: string;
  icon: LucideIcon;
}

export interface NavGroup {
  id: string;
  label: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    id: "overview",
    label: "Overview",
    items: [
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    ],
  },
  {
    id: "macro",
    label: "Macro Intelligence",
    items: [
      { id: "macro-overview", label: "宏观经济总览", icon: Globe2 },
      { id: "macro-china", label: "中国经济", icon: Flag },
      { id: "macro-us", label: "美国经济", icon: Landmark },
      { id: "macro-global", label: "全球市场", icon: Earth },
    ],
  },
  {
    id: "price",
    label: "Price Intelligence",
    items: [
      { id: "price-overview", label: "价格总览", icon: CircleDollarSign },
      { id: "price-digital", label: "数码产品", icon: Smartphone },
      { id: "price-food", label: "食品与日用品", icon: ShoppingBasket },
      { id: "price-energy", label: "能源与大宗商品", icon: Fuel },
    ],
  },
  {
    id: "decision",
    label: "Personal Decision",
    items: [
      { id: "decision-stocks", label: "股票观察", icon: Eye },
      { id: "decision-purchase", label: "购买计划", icon: ShoppingCart },
      { id: "decision-log", label: "决策记录", icon: NotebookPen },
    ],
  },
  {
    id: "settings-group",
    label: "Settings",
    items: [
      { id: "settings", label: "设置", icon: Settings },
    ],
  },
];

export const defaultPage: NavItemId = "dashboard";
