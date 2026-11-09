# ln Physics

Site for ln Physics — **https://lnphysics.com**

## Local development

```bash
cd draft
npm install
npm run dev
```

## Deploy on Cloudflare Pages (correct path)

Do **not** use the Worker form with `npx wrangler deploy`.

1. Cloudflare → **Workers & Pages** → **Create** → **Pages** → Connect GitHub → `neurobridgetech/dawnmentor`
2. Build settings:
   - **Root directory:** `draft`
   - **Build command:** `npm run build:pages`
   - **Build output directory:** `dist/client`
3. Environment variables (Production):
   - `SITE_URL` = `https://lnphysics.com`
4. Deploy, then **Custom domains** → add `lnphysics.com` (and `www` if you want)

## Brand

- Name: **ln Physics**
- Tagline: CURIOSITY INTO CLARITY
- Logo: flat cobalt and navy ln Physics wordmark with an orbital monogram
- HD master: `draft/public/assets/ln-physics-cobalt-hd.png` (transparent PNG)
- Website asset: `draft/public/assets/ln-physics-logo.webp`

- Theme: permanent cobalt, navy and white. Theme preview controls have been removed.
