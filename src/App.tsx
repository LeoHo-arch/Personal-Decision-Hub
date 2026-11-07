import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { DetailHost } from "@/components/shared/DetailHost";
import { NewsTicker } from "@/components/news/NewsTicker";
import { defaultPage, type NavItemId } from "@/config/navigation";
import { useDetailDrawer } from "@/hooks/useDetailDrawer";
import { resolveDetailTarget } from "@/lib/detailTargets";
import type { DetailRef, DetailTarget } from "@/types/detail";
import { MOCK_NEWS } from "@/data/mockNews";
import { getFeaturedNews, getLatestBriefingDate } from "@/lib/news";
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
import { NewsBriefingPage } from "@/pages/news/NewsBriefingPage";
import { NewsArchivePage } from "@/pages/news/NewsArchivePage";
import { SettingsPage } from "@/pages/SettingsPage";

interface PageProps {
  onOpenNews: (id: string) => void;
  onOpenDetail: (ref: DetailRef) => void;
}

const pageRegistry: Record<NavItemId, (props: PageProps) => React.JSX.Element> = {
  dashboard: DashboardPage,
  "macro-overview": MacroOverviewPage,
  "macro-china": MacroChinaPage,
  "macro-us": MacroUsPage,
  "macro-global": MacroGlobalPage,
  "news-briefing": NewsBriefingPage,
  "news-archive": ({ onOpenNews }) => <NewsArchivePage onOpenNews={onOpenNews} />,
  "price-overview": PriceOverviewPage,
  "price-digital": PriceDigitalPage,
  "price-food": PriceFoodPage,
  "price-energy": PriceEnergyPage,
  "decision-stocks": DecisionStocksPage,
  "decision-purchase": DecisionPurchasePage,
  "decision-log": DecisionLogPage,
  settings: SettingsPage,
};

const briefingDate = getLatestBriefingDate(MOCK_NEWS);
const tickerItems = briefingDate ? getFeaturedNews(MOCK_NEWS, briefingDate) : [];

function App() {
  const [activeId, setActiveId] = useState<NavItemId>(defaultPage);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const detail = useDetailDrawer<DetailTarget>();

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
  }, [activeId]);

  const ActivePage = pageRegistry[activeId];

  const openDetail = (ref: DetailRef) => {
    const target = resolveDetailTarget(ref);
    if (target) detail.openWith(target);
  };

  const openNewsDrawer = (id: string) => openDetail({ kind: "news", id });

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <Header onToggleSidebar={() => setMobileOpen((v) => !v)} />
      <NewsTicker items={tickerItems} onOpenNews={openNewsDrawer} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeId={activeId}
          onSelect={setActiveId}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((v) => !v)}
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
        />
        <main ref={mainRef} data-scroll-root className="flex-1 overflow-y-auto p-4 sm:p-6">
          <ActivePage
            onOpenNews={openNewsDrawer}
            onOpenDetail={openDetail}
          />
        </main>
      </div>
      <DetailHost open={detail.open} target={detail.current} onClose={detail.close} />
    </div>
  );
}

export default App;
