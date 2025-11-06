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
Added Juno-specific torpedo breakpoint calculator with combinatorial search utility.
