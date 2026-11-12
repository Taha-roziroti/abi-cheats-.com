# SEO Super Booster — ABI Cheats (abi-cheats.com)

Implementation playbook for this Astro site. **CI-enforced** on `npm run build` via `scripts/verify-seo.mjs` and `scripts/verify-redirects.mjs`.

## 1. Single canonical host

- `SITE_URL` / `SITE_HOST` in `src/data/site.ts` → `https://abi-cheats.com` (apex, no `www`).
- Deploy host (`public/_redirects` on Cloudflare Pages) → **301** `www` → apex.
- Every money page: self-referencing `rel=canonical`, `hreflang=en`, `hreflang=en-US`, `hreflang=x-default` on the same apex URL (`src/config/hreflang.ts`).

## 2. Page-level metadata discipline

- One `<h1>` per indexed money page; unique `<title>` and `meta description` sitewide among the **five money routes** (verified in `verify-seo.mjs`).
- `og:title` / `og:description` match `<title>` / description exactly.
- `og:image` + `twitter:image` → `https://abi-cheats.com/og/*.jpg` at **1200×630** (`og:image:width` / `height`).
- `rel=image_src` on all indexable money pages.
- `robots`: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` on money pages (`BaseLayout.astro`).
- No `meta keywords`, no `SearchAction`, no keyword-list JSON-LD.

## 3. Structured data graph

- Shared `@id` `https://abi-cheats.com/#product` on home and pricing JSON-LD (`PRODUCT_ID` in `src/data/site.ts`).
- `Organization` + `WebSite` on every page (`siteIdentityGraph()` in `src/utils/siteIdentityGraph.ts`); `SITE_PURPOSE` states **Arena Breakout Infinite** affiliate focus.
- `SITE_ABOUT`: exactly **6** `knowsAbout` terms on `WebSite`.
- **FAQPage JSON-LD**
  - **Required** on `/faq/` only as the dedicated FAQ graph (`src/pages/faq.astro`).
  - **Allowed** on money guides that ship in-page FAQs: ESP, aimbot, pricing, Cloud DMA (`FAQ_PAGE_ALLOWED` in `verify-seo.mjs`).
  - **Forbidden** on `/` (home uses Product/Offer; UI FAQ only).
- HWID spoofer page: `noindex`, excluded from sitemap (`astro.config.mjs` filter).
- Optional: `/reviews` with `Review` + `AggregateRating`—not required for CI.

## 4. Intent map (not rendered as keywords)

Use `SEO_ROUTE_INTENTS` in `src/data/site.ts` when writing copy. Primary queries:

| Route | Focus |
|-------|--------|
| `/` | Arena Breakout Infinite cheats, ABI cheats, ESP, aimbot |
| `/arena-breakout-infinite-esp/` | ABI ESP, wallhack, loot overlays |
| `/arena-breakout-infinite-aimbot/` | ABI aimbot, FOV, smoothing, filters |
| `/arena-breakout-infinite-cheats-pricing/` | ABI cheats price, monthly vs lifetime |
| `/cloud-dma-for-arena-breakout-infinite/` | Cloud DMA for Arena Breakout Infinite, Hyper-V |
| `/guides/cloud-dma-setup/` | Cloud DMA setup, virtualization |
| `/faq/` | ABI pricing, Windows, Cloud DMA, checkout |

Structured copy source: `src/data/abi-pages/*.ts` → `npm run sync:abi` → `content/pages/*.md`.

## 5. Media & thumbnails

- Product WebPs under `public/images/abi/` (masters + `-320`…`-960` from `scripts/optimize-images.mjs`).
- Catalog + alts: `src/data/abiImages.ts` (re-exported as `BODYCAM_IMAGES` for legacy imports).
- Per-page heroes/figures: `src/data/abiPageMedia.ts` + markdown frontmatter via `scripts/sync-abi-content.ts`.
- `scripts/generate-seo-assets.mjs` (runs in `build`) writes `/og/*.jpg` from `public/images/abi/abi-hero.webp`.
- `SITEMAP_IMAGES` in `src/data/site.ts` + post-process in `scripts/generate-sitemaps.mjs`.
- Legacy Dota assets remain for `/blog` and `/forum` (`noindex` in `BaseLayout.astro`).

## 6. Sitemap super-boost

- Single `dist/sitemap.xml` urlset (not an index); post-processed by `scripts/generate-sitemaps.mjs` after build.
- Money URLs include ≥1 `image:image` entry.
- `<?xml-stylesheet href="/sitemap.css"?>` for human-readable view.
- No duplicate hreflang in XML (HTML only).
- Sitemap filter excludes `/blog`, `/forum`, `/products/`, `/cheats/`, `/go/`, HWID draft (`src/config/sitemap.ts` + `astro.config.mjs`).

## 7. Crawl rules

- `public/robots.txt`: `Sitemap: https://abi-cheats.com/sitemap.xml`, explicit `Googlebot`, `Disallow: /go/`.
- Legacy blog/forum/Dota product URLs: `noindex` in layout.

## 8. Keyword URL aliases

Keep **in sync**: `src/data/site.ts` `KEYWORD_REDIRECTS`, `scripts/keyword-redirects.mjs`, `scripts/redirects.mjs`, `public/_redirects`.

301 commercial and legacy paths to money pages (verified by `verify-redirects.mjs`), e.g.:

- `/bodycam-cheats`, `/bodycam-hacks`, `/cheats` → `/`
- `/pricing` → `/arena-breakout-infinite-cheats-pricing/`
- `/bodycam-esp` → `/arena-breakout-infinite-esp/`
- `/bodycam-aimbot` → `/arena-breakout-infinite-aimbot/`
- `/cloud-dma` → `/cloud-dma-for-arena-breakout-infinite/`
- `/cloud-dma-setup` → `/guides/cloud-dma-setup/`
- `/guides/system-requirements` → `/` (until ABI requirements page exists)
- `/hwid-spoofer` → `/arena-breakout-infinite-hwid-spoofer/` (draft, noindex)
- Legacy Dota product paths → `/`

Checkout paths under `/go/*` are **302** to external seller URLs (disallowed in `robots.txt`). Primary ABI checkout slug: `/go/abi/`.

## 9. Build commands

```bash
npm run sync:abi              # abi-pages → content/pages markdown
npm run generate:seo-assets   # OG JPEGs from abi-hero
npm run optimize:images       # responsive WebPs (includes public/images/abi)
npm run build                 # verify-redirects → assets → astro → sitemaps → verify-seo → indexnow
```

## 10. Content pages

- Markdown in `content/pages/*.md`; rendered by content layouts and home overview on `/`.
- Cloud DMA additional-costs callout on product pages; setup detail in `/guides/cloud-dma-setup/`.

## 11. Rebrand checklist (new game or domain)

1. Edit `src/data/site.ts` (URL, name, `SITE_PURPOSE`, `LISTED_PRICES`, intents, OG map, `INDEXABLE_MONEY_ROUTES`).
2. Replace `src/data/abi-pages/*` → `npm run sync:abi` → update `public/images/<game>/`.
3. Update `scripts/verify-seo.mjs` money routes and `SITE_HOST` if domain changes.
4. Sync redirect maps (`KEYWORD_REDIRECTS`, `_redirects`, `redirects.mjs`, `keyword-redirects.mjs`).
5. `npm run build` until verification passes.

## 12. Manual audits (optional)

```bash
npm run audit                 # build + seo-audit.mjs (CI + HTML scan)
npm run audit:hreflang
npm run audit:images
```
