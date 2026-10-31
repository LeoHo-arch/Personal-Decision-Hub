# Project memory

## Product intent & audience

- Personal decision support dashboard ("个人决策中心") tracking macro economy, prices, and personal decisions (stocks, purchases, decision records).
- Chinese-language UI; page titles, navigation labels, and dashboard headings all in Chinese.
- Audience: individual users managing personal investment/purchase decisions with macro and price context.

## Brand personality & voice

- Practical, data-oriented, professional. Information density prioritized over decoration at framework stage.

## Visual design & UX direction

- App shell pattern: fixed top Header + collapsible left Sidebar + content area.
- Sidebar organized into 5 groups: Overview, Macro (宏观经济), Price (价格追踪), Decision (个人决策), Settings (设置).
- Sidebar supports collapse/expand, grouping, mobile overlay, current-page highlight.
- Dashboard uses grid of 8 Widget cards (中国宏观, 美国宏观, 股票观察, 核心趋势, 汇率大宗商品, 消费品价格, 购买计划, 决策记录).
- Header elements: logo + product name, global search, date display, notifications, settings entry.
- Reusable components: `Widget` (dashboard cards), `PagePlaceholder` (generic page placeholder).
- Visual polish and data integration deferred — current stage is framework/layout scaffolding only.
- Icons via lucide-react (per global instructions).

## Decisions, constraints & rationale

- Vite + React + TypeScript + Tailwind CSS stack.
- `@/` path alias maps to `src/` (configured in tsconfig + vite).
- Navigation config centralized in `src/config/navigation.ts` as single source of truth for sidebar structure.
- Three business modules (macro, price, decision) kept in separate folders for independent development.
- Pages implemented as grouped components within module folders (e.g., `MacroPages.tsx` handles 总览/中国/美国/全球) rather than one-file-per-page.
- TypeScript typecheck and production build both pass.

## Open questions & assumptions

- Data sources for macro/price/stock content not yet defined.
- Routing approach: currently in-app page registry in App.tsx (no react-router installed); may need proper routing if deep-linking required.
- Visual design language (color palette, typography, spacing system) not yet established — deferred to next phase.
- Search functionality is UI-only placeholder; backend/search scope undefined.
- Responsive breakpoints and mobile layout details not finalized beyond sidebar overlay.