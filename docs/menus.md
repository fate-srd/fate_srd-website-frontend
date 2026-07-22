# Static menu regeneration

Publication sidebars read from `lib/static-menus.js`, produced by:

```bash
npm run generate:menus
```

That script (`scripts/generate-static-menus.mjs`) discovers Drupal menus via JSON:API and writes the committed lookup table plus `toMenuMachineName` / `getStaticMenuByValue` helpers.

## When to regenerate

- A publication menu is added, renamed, or reordered in Drupal
- Sidebar links are missing or point at the wrong paths after a content move
- `getStaticMenuByValue` returns an empty tree for a known rule book

## Workflow

1. Point `NEXT_PUBLIC_DRUPAL_BASE_URL` at the Drupal source of truth.
2. Run `npm run generate:menus`.
3. Spot-check a couple of publications locally (`npm run dev`).
4. Commit `lib/static-menus.js` with the content change.

## CI note

The default GitHub Actions workflow does not call Drupal. Menu freshness is enforced by process: regenerate and commit when menus change. Unit tests cover `toMenuMachineName` / lookup helpers so regressions in naming still fail CI.
