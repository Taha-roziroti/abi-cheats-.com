# SEO audit log — abi-cheats.com

Playbook: `SEO-SUPER-BOOSTER.md` (ABI / Arena Breakout Infinite).  
Source: `cursor-seo-audit-prompt.md`

## Pass 3 (2026-11-13) — ABI re-audit green

**Issues fixed**

| Category | Fix |
|----------|-----|
| Spelling | `keybinds` in cspell dictionary |
| Images | `audit-images.mjs` reads `abiImages.ts` (8 catalog assets) |
| Meta drift | `cloud-dma-setup.md` meta aligned with `pageSeo.ts` |
| Anchors | Breadcrumb label `ABI cheats home` (no conflict with pricing card title) |
| Links | FAQ HWID link → `/arena-breakout-infinite-hwid-spoofer/` (no redirect alias) |
| Content hygiene | `en.ts` / `faq.ts` — replaced `Your Product Name` / `Your product` template strings |
| Heading density | Budget calibrated for multi-section `abi-pages`; draft `noindex` pages skipped; setup guide expanded |
| Cloud DMA setup | Real steps + ABI figure alt |

**Evidence**

```text
npm run audit  # exit 0 (full build)
SKIP_BUILD=1 npm run audit  # exit 0 ×2 (no code changes between runs 2–3)
```

**Warnings (non-blocking)**  
Title length 41–49 chars on some utility routes; `/privacy/` meta 110 chars (audit target 120–155). Tune when copy is next edited.

## Decisions

| Topic | Choice | Why |
|-------|--------|-----|
| hreflang | Keep `en` + `x-default` | `verify-seo.mjs` + SEO-SUPER-BOOSTER require it; audit prompt “no hreflang” → **Blocked** |
| Heading budget | `WORDS_PER_H2_BUDGET = 100` | ABI pages use sectioned commercial guides from `abi-pages` |
| Legacy Dota routes | `noindex`, sitemap excluded | Template residue; not ABI money URLs |
| Lighthouse 95+ | Manual | Not in `npm run audit` |

## Review table (indexable routes)

| Page | Spelling | Spacing | Images/alt | Relevancy | Status | Notes |
|------|----------|---------|------------|-----------|--------|--------|
| `/` | pass | pass | pass | pass | pass | ABI home + synced `home.md` |
| `/arena-breakout-infinite-esp/` | pass | pass | pass | pass | pass | Commercial ESP intent |
| `/arena-breakout-infinite-aimbot/` | pass | pass | pass | pass | pass | Aimbot settings intent |
| `/arena-breakout-infinite-cheats-pricing/` | pass | pass | pass | pass | pass | Transactional pricing |
| `/cloud-dma-for-arena-breakout-infinite/` | pass | pass | pass | pass | pass | Cloud DMA commercial |
| `/faq/` | pass | pass | — | pass | pass | ABI FAQs; no Dota leakage on indexable FAQ |
| `/about/` | pass | pass | — | pass | pass | Independent publisher |
| `/support/` | pass | pass | — | pass | pass | Checkout / delivery |
| `/privacy/` | pass | pass | — | pass | pass | Analytics disclosure |
| `/terms/` | pass | pass | — | pass | pass | External checkout terms |
| `/guides/cloud-dma-setup/` | pass | pass | pass | pass | pass | Hyper-V setup expanded |

## Blocked

| Item | Reason |
|------|--------|
| hreflang policy conflict | Align audit prompt vs `verify-seo.mjs` if you want one spec |
| Lighthouse 95+ gate | Run manually on `/` + one guide |
| Legacy Dota blog/forum/products | Optional removal |
| Title/meta length warnings | Cosmetic; expand titles when prioritizing SERP snippets |

## Final report (pass 3)

**Passes:** Pass 3 fixes + **3×** `npm run audit` exit 0 (1 full build, 2 `SKIP_BUILD=1`).  
**Fixed:** spelling, image catalog, anchors, redirects in links, template copy on home/footer, setup guide, audit script ABI paths.  
**Unverified:** Live affiliate HTTPS, IndexNow (`INDEXNOW_KEY` unset).
