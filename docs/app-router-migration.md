# App Router Migration Roadmap

This repository now uses a hybrid model:

- Existing routes continue to run in `src/pages`.
- The `about-site` route has been migrated to `src/app/about-site/page.js`.

## Next Route Candidates

1. Migrate static pages with limited data dependencies first:
   - `privacy`
   - `contact-us`
   - `official-licensing-fate`
2. Migrate list/detail routes that currently use `getStaticProps`.
3. Keep catch-all dynamic routes in Pages Router until route handlers and data
   loading conventions are finalized.

## Migration Pattern

1. Create the new route in `src/app/<segment>/page.js`.
2. Move metadata from `next/head` to `export const metadata`.
3. Prefer server components by default.
4. Keep shared UI components in `assets/components` until a wider component
   reorganization is scheduled.
5. Delete the corresponding `src/pages` route once the App Router route is
   verified.
