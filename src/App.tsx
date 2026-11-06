import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { NewsTicker } from "@/components/news/NewsTicker";
import { defaultPage, type NavItemId } from "@/config/navigation";
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
import { NewsDetailPage } from "@/pages/news/NewsDetailPage";
import { SettingsPage } from "@/pages/SettingsPage";

interface PageProps {
  selectedNewsId: string | null;
  onOpenNews: (id: string) => void;
  onBackToBriefing: () => void;
}

const pageRegistry: Record<NavItemId, (props: PageProps) => React.JSX.Element> = {
  dashboard: DashboardPage,
  "macro-overview": MacroOverviewPage,
  "macro-china": MacroChinaPage,
  "macro-us": MacroUsPage,
  "macro-global": MacroGlobalPage,
  "news-briefing": NewsBriefingPage,
  "news-archive": NewsArchivePage,
  "news-detail": ({ selectedNewsId, onBackToBriefing }) => (
    <NewsDetailPage newsId={selectedNewsId} onBack={onBackToBriefing} />
  ),
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
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
  }, [activeId]);

  const ActivePage = pageRegistry[activeId];

  const openNews = (id: string) => {
    setSelectedNewsId(id);
    setActiveId("news-detail");
  };

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <Header onToggleSidebar={() => setMobileOpen((v) => !v)} />
      <NewsTicker items={tickerItems} onOpenNews={openNews} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeId={activeId}
          onSelect={setActiveId}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((v) => !v)}
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
        />
        <main ref={mainRef} className="flex-1 overflow-y-auto p-4 sm:p-6">
          <ActivePage
            selectedNewsId={selectedNewsId}
            onOpenNews={openNews}
            onBackToBriefing={() => setActiveId("news-briefing")}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
