# Overwatch Tool Monorepo

This workspace hosts everything needed for the Overwatch Item Optimization Tool:

| Package | Description |
| --- | --- |
| `item-optimizer/` | React + TypeScript SPA (Vite/Tailwind/Redux) that lets players build optimal loadouts with overrides, calculators, and tests (80%+ coverage). |
| `wiki-data-reader/` | TypeScript library that bundles the canonical item data. It fetches raw wiki pages, parses them into `ItemRecord` modules, and exposes helpers/overrides consumed by the app. |

## Getting Started

```bash
npm install
npm run install-all   # optional; installs inside each workspace
npm start             # runs item-optimizer dev server
```

## Data Refresh Workflow

1. `npm run refresh-snapshots`  
   - Executes `wiki-data-reader/scripts/refreshSnapshots.ts`.  
   - Downloads the Stadium item page plus every hero’s Stadium page into `wiki-data-reader/snapshots/`.  
   - Heroes without Stadium data legitimately return 404 and are skipped with a warning.

2. `npm run update-items`  
   - Runs `wiki-data-reader/scripts/updateItems.ts` against the saved snapshots.  
   - Prints a summary of added/updated/removed items and asks for confirmation before touching files (pass `-- --yes` to auto-apply).
   - Preserves existing `id`, `iconUrl`, and `override` metadata where present.

3. `npm run build -w wiki-data-reader`  
   - Rebuilds the distributable `dist/` bundle so `item-optimizer` imports the updated data.

## Testing

- `npm run test -w item-optimizer` – type-check + Vitest with coverage.
- `npm run test -w wiki-data-reader` – parser/text utility tests.
- `npm run test` (root) – runs `test` inside every workspace (passes `--if-present`).

## Repo Tips

- Keep `memory-bank/` documents updated with any architectural decision or workflow change.
- Use the root scripts (`refresh-snapshots`, `update-items`) so all agents follow the same workflow.
- Avoid editing `wiki-data-reader/items/*.ts` by hand; regenerate via the scripts to keep formatting consistent.
