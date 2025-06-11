## Scope

These rules apply from the repository root downward. Child AGENTS.md files override sections below if they conflict.

## Project Summary

Overwatch item build optimizer written in React, TypeScript, Vite, and TailwindCSS. The app helps players select an optimal combination of items given gold and character limits.

## Directory Map

* my-app/src                 application source code
* my-app/src/components      UI components
* my-app/src/utils           helpers and pure functions
* my-app/data.json           canonical item data, avoid reading this file
* my-app/overrides.json      local balance overrides
* my-app/src/types.ts        shared type definitions


## Coding Conventions

* Test coverage should stay at or above 80 percent.
* Keep files small (target < 150 logical lines).
* Use functional React components with hooks.
* Use Tailwind utility classes; avoid inline style props.
* Use Conventional Commits (feat, fix, chore, docs).

## Feature Development Checklist

1. For every new add operation, create a matching remove action in both the UI and the Redux slice.
2. Add unit tests that cover both paths.
3. Update changelog.md with a summary of the feature.

```
YYYY-MM-DD  feature description  main file or folder
```

## Core Module Pointers

* src/Optimizer.tsx                 main optimization routine
* src/utils/optimizer.ts            scoring and search helpers
* src/components/InputSection.tsx   user inputs
* src/components/ResultsSection.tsx result display
* src/components/BreakPointCalculator.tsx bullet breakpoint calculator
* src/components/input/MinValueSection.tsx minimum attribute inputs



