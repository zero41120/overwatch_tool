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
- Optimizer now exposes derived Torpedo Damage attribute for weighting and min value checks.
- Added Juno mediblaster breakpoints tab with situational picks and DPS output.

**Wiki data reader (current)**  
- Added `wiki-data-reader` modules and generator scripts to split legacy `data.json` into per-item TypeScript files, each embedding any override metadata.
- `itemDataProvider` now loads items (and their optional overrides) via `import.meta.glob`, merging editor overrides, disable flags, and hero-specific values.
- Local override utilities gained resilient storage fallback plus normalization helpers; Optimizer/tests updated to the new provider.
- Implemented `wiki-data-reader/scripts/refreshSnapshots.ts` + `wiki-data-reader/scripts/updateItems.ts` so we can fetch Stadium + hero wiki pages into snapshots, regenerate item modules, and leave per-item overrides untouched with parser-focused Vitest coverage.
- Root README now covers the monorepo structure, shared scripts, and testing workflow so future agents understand how to refresh data and run the app.
- Promoted `wiki-data-reader` to a standalone workspace package built with Vite/TypeScript so it exports item records/overrides; `itemDataProvider` now imports those helpers and carries dedicated unit tests for the integration.
- Added TypeScript-powered snapshot + parser tooling (`refresh-snapshots`, `update-items`) that captures Stadium + hero wiki raw pages, diff existing modules, and preserves overrides/IDs with Vitest coverage on the text normalization helpers.
- Stadium powers are now parsed into bundled `heroPowers.ts`, and the optimizer renders a 4-column selector on the breakpoint/Juno card with fold-out descriptions and up to four stored picks (Redux-backed but still excluded from calculations).
- Hero portraits are extracted from hero snapshots, bundled into `heroMetadata.ts`, and the Optimizer's hero selector now shows the fandom-hosted portrait icon for each hero.
- Hero metadata output is filtered to heroes that have Stadium items or powers so the selector only lists playable Stadium heroes.
- Template-driven hero roles are parsed into `heroMetadata`, and the results panel now features a tabbed layout with a recommendation view that lets editors pick 1 Tank/2 Damage/2 Support allies plus enemies, surfacing items and powers tagged with `synergyHeroes`/`counterHeroes` arrays maintained via wiki-data overrides.
- Recommendation view now exposes anti-synergy tagging with shared hero cards, sortable icon/name score cards, and reuses the item tooltip on hover so editors can see why a suggestion surfaced.
- Added `heroPowerOverrides.ts` plus generator support so manual synergy/counter/anti-synergy tags for hero powers persist whenever `npm run update-items` regenerates the data.
- `update-items` now also carries forward manual `synergyHeroes`/`counterHeroes`/`antiSynergyHeroes` arrays stored on item records so editor recommendation metadata survives refreshes.
- Hero power output is now split into per-hero modules under `heroPowers/` with a generated aggregator file so updates only touch the relevant hero when wiki data changes.
- Recommendation metadata now includes an optional `beingCountered` array on both items and hero powers, preserved through the scripts and surfaced in the Recommendations UI so editors can tag threats when enemies counter a pick.
- Recommendation cards now compute and display a signed score (synergy/counter minus anti-synergy/beingCountered) with tests covering the calculation.
- `update-items` now compares hero power module/aggregator contents before prompting, skipping writes when nothing changed to mirror item-level change detection.
- Mediblaster output now accounts for optional armor reduction (including Codebreaker penetration) via a new enemy-armor toggle in the weights UI.
- Added ComputedMetric base class scaffolding to support declarative metric inputs/outputs for the optimizer refactor.
