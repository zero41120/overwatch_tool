# Changelog

2026-01-10 recompute weighted metric scores and breakdowns from selected outputs item-optimizer/src/Optimizer.tsx item-optimizer/src/utils/scoreUtils.ts
2026-01-10 Add metric optional input controls for selected metrics item-optimizer/src/components/input_view/MetricInputsSection.tsx
2026-01-10 add optimizer metric output scoring coverage item-optimizer/src/utils/__tests__/optimizerSearch.test.ts
2025-06-10 Initial release of Overwatch Tool /
2025-06-10 Item optimization engine with weighted scoring and character/item restrictions src/engine
2025-06-10 UI for selecting hero, equipped items (up to 6 slots), available cash, and item weights src/components
2025-06-10 Results section showing best build, total cost, remaining cash, and alternative builds src/components/Results
2025-06-10 Minimum attribute enforcement and breakdown src/engine
2025-06-10 Break point calculator for bullet damage thresholds src/utils/breakpointCalculator.ts
2025-06-10 Redux-powered undo/redo and input history dropdown src/store
2025-06-10 Searchable dropdowns for item and hero selection src/components/Dropdowns
2025-06-10 Support for custom item overrides via overrides.json src/overrides.json

2025-06-10 Modular React component structure with TypeScript, Vite, and TailwindCSS src/
2025-06-11 Add avoid button in results list src/components/ResultsSection.tsx
2025-06-11 Integrate ItemCard with avoid button src/components
2025-06-11 Add default minimum value group for Health/Armor/Shield src/slices/inputSlice.ts
2025-06-11 Fix mobile overflow in damage calculator table src/components/BreakPointCalculator.tsx
2025-06-12 Display item descriptions without label src/components/ResultsSection.tsx
2025-06-12 Fix mobile layout issues and disable iOS input zoom src/components

2025-06-14  add tests for dropdown, toolbar, and calculator  src/components
2025-06-15  add import/export modal for state management  src/components/ImportExportModal.tsx
2025-06-15  fix import modal usability issues and persist equipped toggle  src/components/ImportExportModal.tsx
2025-06-28  fix DFS selection logic for build ranking  src/Optimizer.tsx
2025-06-30  add All Hero and No Hero options for hero selection  src/components/input_view/HeroSelect.tsx
2025-06-30  add toggle to enable/disable editor overrides  src/components/input_view/OverrideToggle.tsx
2025-07-01  add selectable build list and hoverable item overview  src/components/results_view
2025-07-01  create ItemGallery component for browsing items  src/components/ItemGallery.tsx
2025-07-01  integrate ItemGallery into Optimizer view  src/Optimizer.tsx
2025-07-01  enhance ItemGallery with search, tooltip preview, folding, scroll  src/components/ItemGallery.tsx
2025-07-01  add local override editor with save/delete and viewer  src/components/ItemGallery.tsx
2025-07-02  move tooltip to redux store  src/slices/tooltipSlice.ts
2025-07-02  refactor item tables into reusable components  src/components
2025-07-03  show item icons in dropdown lists  src/components/shared/SearchableDropdown.tsx
2025-07-02  improve item display and tooltip handling in ItemsOverviewTable src/components/results_view/ItemsOverviewTable.tsx
2025-07-02  move tooltip to redux store  src/slices/tooltipSlice.ts
2025-07-02  refactor item tables into reusable components  src/components
2025-07-02  local overrides reload and UI markers  src
2025-07-04  fix local overrides view/edit  src/components/ItemGallery.tsx
2025-07-06  add cheap and premium build buttons  src/components/input_view/SubmitSection.tsx
2025-07-13  reduce mobile padding for main layout and cards  src/App.tsx
2025-07-14  add incremental build calculator  src/Optimizer.tsx
2025-07-16  remove duplicate incremental builds  src/Optimizer.tsx src/utils/utils.ts
2025-11-05  add Juno torpedo breakpoint calculator  src/components/BreakPointCalculator.tsx
2025-11-06  polish Juno calculator UI while preserving working logic  item-optimizer/src/components/JunoTorpedoCalculator.tsx
2025-11-06  adjust Juno damage model: AP and burn only; hide non-AP items; add Select all; match table dark theme  item-optimizer/src/utils/junoBreakpoints.ts item-optimizer/src/components/JunoTorpedoCalculator.tsx
2025-11-06  remove generic burn logic; apply 1.2x only when Skyline Nanites is selected; remove UI toggle and Burn column  item-optimizer/src/utils/junoBreakpoints.ts item-optimizer/src/utils/junoItems.ts item-optimizer/src/components/JunoTorpedoCalculator.tsx
2025-11-06  show icons in Juno table; remove Budget/Survival columns; keep Spend  item-optimizer/src/components/JunoTorpedoCalculator.tsx
2025-11-06  Juno results use 6-slot grid for items (reuse ItemsOverviewTable)  item-optimizer/src/components/JunoTorpedoCalculator.tsx
2025-11-08  move wiki data loading into a built workspace dependency and add provider tests  wiki-data-reader item-optimizer/src/itemDataProvider.ts item-optimizer/src/__tests__
2025-11-08  add wiki snapshot refresh + parser/update scripts with hero ingestion  wiki-data-reader/scripts wiki-data-reader/snapshots
2025-11-09  fetch remote item icon URLs from wiki snapshots and remove local PNGs  wiki-data-reader/scripts item-optimizer/src
2025-11-18  add stadium power data plus 4-slot selector in breakpoint card (folding details)  wiki-data-reader/heroPowers.ts item-optimizer/src/components/input_view/HeroPowerGrid.tsx item-optimizer/src/components/BreakPointCalculator.tsx
2025-11-19  add hero portrait metadata pipeline and show icons in hero selector  wiki-data-reader item-optimizer/src/components/input_view/HeroSelect.tsx
2025-11-20  limit hero selector to stadium heroes by requiring items or powers  wiki-data-reader item-optimizer/src/Optimizer.tsx
2025-11-20  add recommendations tab with role-based hero pickers and synergy/counter suggestions  item-optimizer/src/components/results_view wiki-data-reader
2025-11-19  preserve hero power synergy tags via dedicated override map  wiki-data-reader/scripts/updateItems.ts wiki-data-reader/heroPowerOverrides.ts
2025-11-21  preserve manual item synergy/counter/anti-synergy metadata when refreshing wiki records  wiki-data-reader/scripts/lib/itemBuilder.ts
2025-11-21  split hero power output into per-hero modules with aggregator  wiki-data-reader/heroPowers wiki-data-reader/scripts/updateItems.ts
2025-11-22  add beingCountered metadata to items/powers and surface in Recommendations UI  wiki-data-reader/types.ts wiki-data-reader/scripts/lib item-optimizer/src/components/results_view/RecommendationPanel.tsx
2025-11-20  calculate and display recommendation scores using synergy, counter, anti-synergy, and beingCountered matches  item-optimizer/src/components/results_view/RecommendationPanel.tsx
2025-11-20  hero power write now skips prompts when no per-hero module or aggregator changes are detected  wiki-data-reader/scripts/updateItems.ts wiki-data-reader/scripts/lib/heroPowerOutput.ts
2025-12-26  expose editor override attributes in weighting dropdown, limit to selected hero, show counts, and add coverage  item-optimizer/src/utils/attributeUtils.ts
2026-01-04  add Juno mediblaster output attribute for weighting/min values  item-optimizer/src/utils
2026-01-04  update Juno mediblaster output with max ammo clip size scaling  item-optimizer/src/utils/junoMediblaster.ts
2026-01-04  prioritize Juno mediblaster output in attribute sorting  item-optimizer/src/utils/attributeUtils.ts
2026-01-04  add Juno torpedo damage attribute for optimizer weighting/min values  item-optimizer/src/utils/junoTorpedoDamage.ts item-optimizer/src/Optimizer.tsx
2026-01-06  add equip + avoid toolbar actions to Items Overview grid and refresh visuals  item-optimizer/src/components/results_view/ItemsOverviewTable.tsx
2026-01-06  auto-recompute results after avoid/equip updates using last compute mode  item-optimizer/src/Optimizer.tsx
2026-01-06  keep item count stable when pinning from Items Overview  item-optimizer/src/components/results_view/ItemsOverviewTable.tsx
2026-01-07  add Juno mediblaster breakpoints tab with situational picks  item-optimizer/src/components/JunoTorpedoCalculator.tsx item-optimizer/src/components/juno item-optimizer/src/utils
2026-01-07  add arrow-key navigation to searchable dropdowns  item-optimizer/src/components/shared/SearchableDropdown.tsx
2026-01-07  add mediblaster armor toggle and codebreaker armor penetration handling  item-optimizer/src/utils/junoMediblaster.ts item-optimizer/src/components/input_view/WeightsSection.tsx
2026-01-08  replace Juno mediblaster breakpoint search with Pareto DP frontier pruning  item-optimizer/src/utils/junoMediblasterBreakpoints.ts item-optimizer/src/utils/__tests__/junoMediblasterBreakpoints.test.ts
2026-01-09  replace optimizer DFS pruning with Pareto DP search for optimal builds  item-optimizer/src/Optimizer.tsx item-optimizer/src/utils/optimizerSearch.ts
2026-01-10  add Codex SDK kanban runner script  scripts/codexKanban.ts
2026-01-10  add ComputedMetric base class with inputs/outputs metadata  item-optimizer/src/metrics/ComputedMetric.ts
2026-01-10  add multi-output metric support for weights and scoring  item-optimizer/src/metrics item-optimizer/src/utils item-optimizer/src/components/input_view
2026-01-10  warn when metric auto-discovery finds no modules  item-optimizer/src/metrics/metricDiscovery.ts
2026-01-10  scope metric outputs by hero metadata  item-optimizer/src/metrics
2026-01-10  add hero-scoped metric registry coverage for non-matching heroes  item-optimizer/src/metrics/__tests__/metricRegistry.test.ts
2026-01-10  add derived stat map builder for metric evaluation  item-optimizer/src/utils/derivedStatMap.ts
2026-01-10  refactor optimizer inputs to accept selected metric outputs and generic profile extras  item-optimizer/src/utils/optimizerSearch.ts item-optimizer/src/utils/optimizerProfileInputs.ts item-optimizer/src/utils/optimizerPareto.ts
2026-01-10  preserve equal-score optimizer builds for UI cost selection  item-optimizer/src/Optimizer.tsx item-optimizer/src/utils/optimizerSearch.ts
2026-01-11  skip codex kanban run when all tasks are complete  scripts/codexKanban.ts
2026-01-12  loop codex kanban runner while pending tasks remain  scripts/codexKanban.ts
2026-01-12  auto-discover metric classes via Vite glob with discovery warnings  item-optimizer/src/metrics/metricRegistry.ts item-optimizer/src/metrics/metricDiscovery.ts
2026-01-13  attach per-metric values to optimizer build outputs and recompute scores from them  item-optimizer/src/Optimizer.tsx item-optimizer/src/utils/optimizerSearch.ts
