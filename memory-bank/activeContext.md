# Active Context

Initial memory bank created. No active tasks are in progress.
Updated `AGENTS.md` to mention the memory bank requirement.
Future updates should note current work, open issues, and memory bank changes.
Added hero options for "All Heroes" and "No Hero" in selection dropdown.
Added UI toggle to enable or disable editor overrides.
Added ItemGallery into main optimizer layout.
Implemented hover tooltip, search filter, folding, and scrolling for gallery.
Added local override editor in ItemGallery with hero dropdown, attribute rows, and save to localStorage.
Implemented hoverable item overview grid and radio-based build selection in Results section.
Moved tooltip state to Redux for global usage.
Refactored item lists into reusable ItemCardList and BuildList components.
Displayed item icons in SearchableDropdown options.
Integrated local override reloads and per-item restore/update buttons.
Reduced padding on mobile layout to improve usability.
Deduplicated incremental build results to remove duplicate item combos.
Added Juno torpedo breakpoint calculator with situational toggles in BreakPointCalculator.
Introduced torpedo item mapper for Juno with placeholder Skyline Nanites data pending verification.

Updated Juno torpedo UI on main with card-style item selection.

Removed all generic "burn" parsing/logic. Implemented a precise override: when any selected item is Skyline Nanites, apply a 1.2x damage multiplier during breakpoint evaluation. Removed the UI burn toggle and the Burn column in the results table. Skyline remains selectable via situational priority.

Latest: Updated Juno results table to include item icons next to names (mirrors ItemsOverviewTable pattern). Removed Budget and Survival columns to focus on damage-impacting fields; kept Spend. Default selection now enables all relevant items by default. Removed quick situational pills as redundant with the checklist.
Added: Juno results Items column now renders a 6-slot grid (via ItemsOverviewTable) instead of a single long row for better readability.
