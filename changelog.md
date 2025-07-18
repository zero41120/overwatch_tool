# Changelog

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
