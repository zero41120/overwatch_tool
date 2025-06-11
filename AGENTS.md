# Repository Guidelines

- Code lives in `my-app/src`.
- Run `npm install` and `npm run build` to verify changes are ready before each PR.
- Ensure tests pass with `npm test`; coverage should stay above 80%.
- Deployment is manual only; you can skip `npm run deploy` in this environment.
- **Do not open `my-app/data.json`**. Use `src/types.ts` for the data shape.
- When add new features, update AGENTS.md with a brief description of the feature and its location in the codebase.


# Project Overview
This app is an Overwatch tool that helps users optimize their in-game item builds. It allows users to:
- This project uses Typescript, Vite, TailwindCSS
- When editing, prefers to create new small files, sub-modules, and components. Recommanded to have about 150 lines of code per file.
- Select equipped items and available cash.
- Calculate the best combination of items to maximize a weighted score, considering item costs and character restrictions.
- View the results, including the final build, total cost, remaining cash, and alternative builds.
  - The main logic for optimization is in `src/Optimizer.tsx`, and the UI components for displaying results and inputs are in `src/components/ResultsSection.tsx` and `src/components/InputSection.tsx`.
  - Item data are loaded from `src/data.json` and can be overridden via `src/overrides.json`. Do not edit `data.json` directly.
  - Custom item attribute overrides live in `src/overrides.json` so that balance adjustments can be tested without changing the base data file.
  - Minimum attribute totals can be enforced from `src/components/input/MinValueSection.tsx`.
  - The result breakdown includes attributes referenced in Minimum Attribute groups, implemented via `buildBreakdown` in `src/utils/optimizer.ts`.
  - A break point calculator in `src/components/BreakPointCalculator.tsx` helps analyze bullet damage thresholds.

# File Overview

- **src/Optimizer.tsx** – top level React component that loads item data, performs the optimization search and reads input state from Redux.
- **src/components/InputSection.tsx** – orchestrates user input by composing smaller components located under `src/components/input/`.
- **src/components/ResultsSection.tsx** – displays the selected and recommended items as well as alternative builds.
- **src/components/Toolbar.tsx** – provides Undo/Redo buttons and listens for `Ctrl+Z`/`Ctrl+Shift+Z`.
- **src/components/HistoryDropdown.tsx** – dropdown showing past input states recorded by `redux-undo`.
- **src/components/SearchableDropdown.tsx** – dropdown with search used for most selection inputs.
- **src/components/BreakPointCalculator.tsx** – optional damage calculator displayed below the results.
- **src/components/input/** – contains smaller input related components such as `HeroSelect`, `CashInput`, `EquippedSection`, `AvoidSection`, `WeightsSection`, `MinValueSection` and `SubmitSection`.
- **src/store.ts** – Redux store configured with `redux-undo`.
- **src/slices/inputSlice.ts** – slice that stores form values such as hero, cash, equipped items, weights and minimum value groups.
- **src/hooks.ts** – typed `useAppDispatch` and `useAppSelector` helpers for Redux.
- **src/utils/optimizer.ts** – helper functions for scoring and aggregating attributes.
- **src/utils/breakpoint.ts** – helper logic for the break point calculator.
- **src/utils/attribute.ts** – utilities to format and sort attribute names.
- **src/types.ts** – TypeScript interfaces describing items and result shapes.
