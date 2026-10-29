# LN Physics

Site for QuantEdge by LN Physics — **https://lnphysics.com**

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

- Name: **LN Physics**
- Tagline: CURIOSITY INTO CLARITY
- Mark: atom-orbit LN emblem (teal + ink)
- Wordmark: Syne
