## Scope

These rules apply from the repository root downward. Child AGENTS.md files override sections below if they conflict.

## Project Summary

Overwatch item build optimizer written in React, TypeScript, Vite, and TailwindCSS. The app helps players select an optimal combination of items given gold and character limits.

## Directory Map
Root directory is overwatch_tool/
- overwatch_tool/AGENTS.md this file, project rules and guidelines, there is only 1 AGENTS.md file
- overwatch_tool/memory-bank/ project context and decisions
- overwatch_tool/changelog.md change log for features and fixes
- overwatch_tool/item-optimizer/ main application code, you likely need to run `npm install` here first


Data files, do not edit or read directly unless the task requires it:
- data.json - canonical item data, avoid reading this file
- overrides.json - local balance overrides

## Coding Conventions
- Start by writing or updating test for the feature you are implementing. This allows you to understand the expected behavior and edge cases.
- Test coverage should stay at or above 80 percent. Use `test:coverage` script to check.
- Keep files small (target < 150 logical lines). When near the limit, consider splitting into smaller components or create utility functions.
- Use functional React components with hooks.
- Use Tailwind utility classes; avoid inline style props.
- Use Conventional Commits (feat, fix, chore, docs).

## Memory Bank

All project context lives in the `memory-bank/` folder. Always read every file in
that folder at the start of a session to understand the current state and
decisions. Keep these files up to date when you make significant changes or
learn new information.

Consider memory-bank as a method to inform future coding agents about the system.
That is not a human file, so feel free to make it as technically as needed for coding agents to run efficiently.
Cross reference the changelog.md and condense the memory-bank if needed.

## Feature Development Checklist

1. For every new add operation, create a matching remove action in both the UI and the Redux slice.
2. Add unit tests that cover both paths.
3. Update changelog.md with a summary of the feature.

```
YYYY-MM-DD  feature description  main file or folder
```
