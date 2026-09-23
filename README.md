[![](https://github.com/fate-srd/.github/blob/main/img/Fate-CI-style-badge.svg)](https://github.com/fate-srd) [![Netlify Status](https://api.netlify.com/api/v1/badges/350be26d-6200-4751-9e31-f88fb6584dd8/deploy-status)](https://app.netlify.com/sites/fate-srd/deploys)

# Fate SRD

## Development

- `npm run dev` starts the local Next.js server.
- `npm run lint` runs ESLint.
- `npm run format:check` verifies formatting.
- `npm test` runs unit/integration tests (Vitest).
- `npm run test:smoke` runs Playwright smoke tests.
- `npm run generate:menus` regenerates sidebar menus from Drupal.

## Environment Variables

These variables are required for app startup:

- `NEXT_PUBLIC_DRUPAL_BASE_URL`

Optional variables used by features:

- `DRUPAL_PREVIEW_SECRET`
- `DRUPAL_REVALIDATE_SECRET` — required for on-demand revalidation (`/api/revalidate`)
- `NEXT_PUBLIC_FATHOM_ID`
- `NEXT_PUBLIC_PLAUSIBLE_SRC` — site-specific script URL from the Plausible dashboard (e.g. `https://plausible.io/js/pa-XXXXX.js`)
- `NEXT_PUBLIC_SITE_URL` — canonical/OG base URL (defaults to `https://fate-srd.com`)
- `YOUTUBE_API_KEY`

## On-demand revalidation

Drupal (or a webhook) can refresh a statically generated page without a full rebuild:

```bash
curl -X POST "https://fate-srd.com/api/revalidate?secret=YOUR_SECRET&path=/fate-core/outcomes"
```

`path` must be the site alias (leading slash). Articles also use ISR (`revalidate: 3600`).

## Static menus

[`lib/static-menus.js`](lib/static-menus.js) is a generated artifact (~12k lines) used by publication sidebars.

1. Ensure `NEXT_PUBLIC_DRUPAL_BASE_URL` points at a Drupal instance with menus available.
2. Run `npm run generate:menus`.
3. Commit the updated `lib/static-menus.js` whenever Drupal menu structure changes.

CI does not regenerate menus (no Drupal credentials in the default workflow). After menu edits in Drupal, regenerate and commit before deploy so Netlify builds ship fresh nav.

## Publication landings

Shared copy and heroes live in [`assets/data/publications.js`](assets/data/publications.js). Route files under `src/pages/<slug>/` are thin wrappers around `PublicationLanding`.

## Styling

Primary styles are Sass/BEM under `assets/components/` (imported from `_app.js`). Tailwind is not used.
