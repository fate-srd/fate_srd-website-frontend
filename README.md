[![](https://github.com/fate-srd/.github/blob/main/img/Fate-CI-style-badge.svg)](https://github.com/fate-srd) [![Netlify Status](https://api.netlify.com/api/v1/badges/350be26d-6200-4751-9e31-f88fb6584dd8/deploy-status)](https://app.netlify.com/sites/fate-srd/deploys)

# Fate SRD

## Development

- `npm run dev` starts the local Next.js server.
- `npm run lint` runs ESLint.
- `npm run format:check` verifies formatting.
- `npm test` runs unit/integration tests (Vitest).
- `npm run test:smoke` runs Playwright smoke tests.

## Environment Variables

These variables are required for app startup:

- `NEXT_PUBLIC_DRUPAL_BASE_URL`

Optional variables used by features:

- `DRUPAL_PREVIEW_SECRET`
- `NEXT_PUBLIC_FATHOM_ID`
- `YOUTUBE_API_KEY`

## Styling Notes

Sass files now use the module system (`@use`) rather than deprecated `@import`.

## Generated Artifacts

- `lib/static-menus.js` and `public/sitemap-0.xml` are generated files.
- Regenerate menus with `npm run generate:menus`.
