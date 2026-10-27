# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Approved product direction (27 October 2026)
- Keep the selected prism science theme, teal/mint/white palette and uncluttered messaging.
- Use an educator-focused logo mark and full designed wordmark with depth; the user authorizes creative refinement.
- Add a complete multi-column footer, a local blog index and local reading pages for all five existing articles.
- Preserve original article dates and label archived information honestly; do not invent teacher credentials or available resources.
- Chanakya AI redirects to https://edu.aichanakya.in/. No local sign-in is required for this presentation site.
- Prepare a deployable production build; deployment destination and public contact details are being clarified.
