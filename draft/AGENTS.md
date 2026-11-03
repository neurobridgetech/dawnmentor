# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Approved product direction (27 October 2026)
- Keep the selected prism science theme, cobalt/navy/white palette and uncluttered messaging.
- Brand is **Ln Physics** (domain lnphysics.com). Tagline remains CURIOSITY INTO CLARITY. Atom-orbit LN mark + Syne wordmark.
- Use an educator-focused logo mark and full designed wordmark with depth; the user authorizes creative refinement.
- Add a complete multi-column footer, a local blog index and local reading pages for all five existing articles.
- Preserve original article dates and label archived information honestly; do not invent teacher credentials or available resources.
- Chanakya AI redirects to https://app.lnphysics.com/. No local sign-in is required for this presentation site.
- Prepare a deployable production build; deployment destination and public contact details are being clarified.

## Approved brand update (1 November 2026)
- Use **Ln Physics** capitalization throughout the current site.
- Use the user's cyan/silver and amber orbital logo recreation: public/assets/ln-physics-logo-hd.png, with ln-physics-logo.webp for the site. This replaces the older LN monogram direction.


## Final cobalt direction (1 November 2026)
- Cobalt is the permanent theme. Remove theme choices and preview controls.
- Keep the Ln Physics orbital concept, refined into a flat cobalt/navy logo without neon, chrome or amber effects. This supersedes the earlier glossy logo direction.
- Use white text on cobalt primary actions; use white buttons with navy text on dark sections. All cards, links, icons, focus states and artwork should follow the cobalt palette.

## Brand text casing (3 November 2026)
- Use **ln Physics** everywhere in website text, metadata and accessible labels. Both l and n are lowercase, including inside uppercase eyebrow labels. This supersedes earlier capitalization directions.

- Approved practice destination (3 November 2026): https://app.lnphysics.com/ for all Start practising buttons and related platform links.
