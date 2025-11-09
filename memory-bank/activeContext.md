# Active Context

- No open tasks; current baseline includes Skyline Nanites 1.2x handling and tuned Juno torpedo UI/cards.
- Item data now loads via `itemDataProvider` which gathers per-item modules under `wiki-data-reader/items` and merges override modules with `import.meta.glob`.
- Item modules now embed override metadata (disabled, editor overrides) directly; ItemGallery/local overrides consume the merged structure with resilient localStorage fallbacks.
- Wiki ingestion now lives in `scripts/fetch-wiki-items.mjs`, which pulls the Stadium/Items raw wiki source, parses it via `scripts/wikiParser.mjs`, and rewrites per-item modules while preserving embedded overrides.
