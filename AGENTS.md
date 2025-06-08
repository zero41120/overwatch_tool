# Repository Guidelines

- Code lives in `my-app/src`.
- Run `npm install` and `npm run build` to verify changes are ready before each PR.
- **Do not open `my-app/data.json`**. Use `src/types.ts` for the data shape.

- This project uses Typescript, Vite, TailwindCSS
- When editing, prefers to create new small files, sub-modules, and components. Recommanded to have about 150 lines of code per file.

# Project Overview
This app is an Overwatch tool that helps users optimize their in-game item builds. It allows users to:

- Select equipped items and available cash.
- Calculate the best combination of items to maximize a weighted score, considering item costs and character restrictions.
- View the results, including the final build, total cost, remaining cash, and alternative builds.
- The main logic for optimization is in src/Optimizer.tsx, and the UI components for displaying results and inputs are in src/components/ResultsSection.tsx and src/components/NumberInput.tsx. Item data are loaded from data.json, which is a large file dump that should not be edited directly.