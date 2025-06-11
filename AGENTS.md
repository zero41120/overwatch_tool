# Repository Guidelines

- Code lives in `my-app/src`.
- Run `npm install` and `npm run build` to verify changes are ready before each PR.
- Ensure tests pass with `npm run coverage`; coverage must stay above 80%.
- Deployment is manual only; you can skip `npm run deploy` in this environment.
- **Do not open `my-app/data.json`**. Use `src/types.ts` for the data shape.

- This project uses Typescript, Vite, TailwindCSS
- When editing, prefers to create new small files, sub-modules, and components. Recommanded to have about 150 lines of code per file.

# Project Overview
This app is an Overwatch tool that helps users optimize their in-game item builds. It allows users to:

- Select equipped items and available cash.
- Calculate the best combination of items to maximize a weighted score, considering item costs and character restrictions.
- View the results, including the final build, total cost, remaining cash, and alternative builds.
  - The main logic for optimization is in `src/Optimizer.tsx`, and the UI components for displaying results and inputs are in `src/components/ResultsSection.tsx` and `src/components/InputSection.tsx`.
  - Item data are loaded from `src/data.json` and can be overridden via `src/overrides.json`. Do not edit `data.json` directly.

# File Overview

- **src/Optimizer.tsx** – top level React component that loads item data, manages form state and performs the optimization search.
- **src/components/InputSection.tsx** – handles all user inputs such as hero, cash, equipped items and attribute weights.
- **src/components/ResultsSection.tsx** – displays the selected and recommended items as well as alternative builds.
- **src/utils/optimizer.ts** – helper functions for scoring and aggregating attributes.
- **src/utils/attribute.ts** – utilities to format and sort attribute names.
- **src/types.ts** – TypeScript interfaces describing items and result shapes.
