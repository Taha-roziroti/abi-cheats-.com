/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/'],
  ['/cheats/', '/'],
  ['/products/dota-2-cheats', '/'],
  ['/products/dota-2-cheats/', '/'],
  ['/pricing', '/arena-breakout-infinite-cheats-pricing/'],
  ['/pricing/', '/arena-breakout-infinite-cheats-pricing/'],
  ['/bodycam-hacks', '/'],
  ['/bodycam-hacks/', '/'],
  ['/bodycam-cheats', '/'],
  ['/bodycam-cheats/', '/'],
  ['/bodycam-esp', '/arena-breakout-infinite-esp/'],
  ['/bodycam-esp/', '/arena-breakout-infinite-esp/'],
  ['/bodycam-aimbot', '/arena-breakout-infinite-aimbot/'],
  ['/bodycam-aimbot/', '/arena-breakout-infinite-aimbot/'],
  ['/bodycam-cheats-price', '/arena-breakout-infinite-cheats-pricing/'],
  ['/bodycam-cheats-price/', '/arena-breakout-infinite-cheats-pricing/'],
  ['/bodycam-requirements', '/'],
  ['/bodycam-requirements/', '/'],
  ['/cloud-dma', '/cloud-dma-for-arena-breakout-infinite/'],
  ['/cloud-dma/', '/cloud-dma-for-arena-breakout-infinite/'],
  ['/cloud-dma-for-bodycam', '/cloud-dma-for-arena-breakout-infinite/'],
  ['/cloud-dma-for-bodycam/', '/cloud-dma-for-arena-breakout-infinite/'],
  ['/guides/system-requirements', '/'],
  ['/guides/system-requirements/', '/'],
  ['/hwid-spoofer', '/arena-breakout-infinite-hwid-spoofer/'],
  ['/hwid-spoofer/', '/arena-breakout-infinite-hwid-spoofer/'],
  ['/go/main-product', '/go/abi/'],
  ['/go/main-product/', '/go/abi/'],
  ['/go/bodycam', '/go/abi/'],
  ['/go/bodycam/', '/go/abi/'],
  ['/cloud-dma-setup', '/guides/cloud-dma-setup/'],
  ['/cloud-dma-setup/', '/guides/cloud-dma-setup/'],
  ['/sitemap-index.xml', '/sitemap.xml'],
  ['/sitemap-0.xml', '/sitemap.xml'],
]);

export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
