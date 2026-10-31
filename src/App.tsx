import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { defaultPage, type NavItemId } from "@/config/navigation";
import { DashboardPage } from "@/pages/DashboardPage";
import {
  MacroOverviewPage,
  MacroChinaPage,
  MacroUsPage,
  MacroGlobalPage,
} from "@/pages/macro/MacroPages";
import {
  PriceOverviewPage,
  PriceDigitalPage,
  PriceFoodPage,
  PriceEnergyPage,
} from "@/pages/price/PricePages";
import {
  DecisionStocksPage,
  DecisionPurchasePage,
  DecisionLogPage,
} from "@/pages/decision/DecisionPages";
import { SettingsPage } from "@/pages/SettingsPage";

const pageRegistry: Record<NavItemId, () => React.JSX.Element> = {
  dashboard: DashboardPage,
  "macro-overview": MacroOverviewPage,
  "macro-china": MacroChinaPage,
  "macro-us": MacroUsPage,
  "macro-global": MacroGlobalPage,
  "price-overview": PriceOverviewPage,
  "price-digital": PriceDigitalPage,
  "price-food": PriceFoodPage,
  "price-energy": PriceEnergyPage,
  "decision-stocks": DecisionStocksPage,
  "decision-purchase": DecisionPurchasePage,
  "decision-log": DecisionLogPage,
  settings: SettingsPage,
};

function App() {
  const [activeId, setActiveId] = useState<NavItemId>(defaultPage);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const ActivePage = pageRegistry[activeId];

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <Header onToggleSidebar={() => setMobileOpen((v) => !v)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeId={activeId}
          onSelect={setActiveId}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((v) => !v)}
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
        />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <ActivePage />
        </main>
      </div>
    </div>
  );
}

export default App;
