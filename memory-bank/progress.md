# Progress

**Core platform (Jun 2025)**  
- Optimizer, responsive React UI, search/avoid/import-export features shipped with 80%+ test coverage.

**Item browsing & overrides (late Jun–Jul 2025)**  
- ItemGallery added to Optimizer with search, hover previews, folding, scroll, and localStorage-backed override editor.
- Tooltip state moved to Redux; results and dropdowns now render shared icon-rich components.
- Override toggle, reload markers, and build selector/hover grid integrated into results workflow.

**Build workflow polish (Jul 2025)**  
- Premium/cheap build shortcuts, incremental build calculator with dedupe, and tighter mobile spacing.

**Juno torpedo program (Nov 2025)**  
- Dedicated calculator, situational toggles, and Skyline Nanites 1.2× damage rule with streamlined UI/table layout.

**Wiki data reader (current)**  
- Added `wiki-data-reader` modules and generator scripts to split legacy `data.json` into per-item TypeScript files, each embedding any override metadata.
- `itemDataProvider` now loads items (and their optional overrides) via `import.meta.glob`, merging editor overrides, disable flags, and hero-specific values.
- Local override utilities gained resilient storage fallback plus normalization helpers; Optimizer/tests updated to the new provider.
- Implemented `scripts/fetch-wiki-items.mjs` with a shared `scripts/wikiParser.mjs` helper so we can fetch/parsing the Stadium wiki page, regenerate item modules, and leave per-item overrides untouched. Parser-focused Vitest coverage guards the markup conversions.
