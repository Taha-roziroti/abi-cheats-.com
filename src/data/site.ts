/** Canonical SEO / site identity — abi-cheats.com */

import { ABI_ROUTES, ABI_MONEY_ROUTES } from '../config/routes';
import { BODYCAM_IMAGES } from './bodycamImages';
import { BODYCAM_HERO, PLACEHOLDER_ALT } from './placeholders';

export const SITE_HOST = 'abi-cheats.com';
export const SITE_URL = `https://${SITE_HOST}`;

export const SITE_NAME = 'ABI Cheats';
export const SITE_BRAND = SITE_NAME;
export const SUPPORT_EMAIL = `support@${SITE_HOST}`;

export const PRODUCT_BASE = '/';
export const TITLE_PREFIX = 'Arena Breakout Infinite Cheats';

export const PRODUCT_ID = `${SITE_URL}/#product`;

export const SITE_PURPOSE =
  'Arena Breakout Infinite PC cheat guides—ESP, aimbot, pricing, and Cloud DMA setup at abi-cheats.com.';

export const SITE_ABOUT = [
  'Arena Breakout Infinite PC software',
  'ESP and wallhack overlays',
  'Aimbot configuration',
  'Cloud DMA',
  'Hyper-V virtualization',
  'Windows PC compatibility',
] as const;

export const LISTED_PRICES = {
  monthlyUsd: 35,
  lifetimeUsd: 150,
  cloudDmaLifetimeUsd: 50,
} as const;

export const SEO_ROUTE_INTENTS: Record<string, string> = {
  [ABI_ROUTES.home]: 'Arena Breakout Infinite cheats, ABI cheats',
  [ABI_ROUTES.esp]: 'Arena Breakout Infinite ESP, wallhack, loot ESP',
  [ABI_ROUTES.aimbot]: 'Arena Breakout Infinite aimbot, ABI aimbot',
  [ABI_ROUTES.pricing]: 'Arena Breakout Infinite cheats price, plans',
  [ABI_ROUTES.cloudDma]: 'Cloud DMA for Arena Breakout Infinite',
  [ABI_ROUTES.cloudDmaSetup]: 'Cloud DMA Hyper-V setup',
  [ABI_ROUTES.faq]: 'ABI pricing, Cloud DMA, checkout',
  [ABI_ROUTES.support]: 'checkout and delivery support',
};

export const INDEXABLE_MONEY_ROUTES = ABI_MONEY_ROUTES;

export const OG_IMAGES: Record<string, string> = {
  [ABI_ROUTES.home]: '/og/home.jpg',
  [ABI_ROUTES.esp]: '/og/home.jpg',
  [ABI_ROUTES.aimbot]: '/og/home.jpg',
  [ABI_ROUTES.pricing]: '/og/pricing.jpg',
  [ABI_ROUTES.cloudDma]: '/og/cloud-dma.jpg',
  [ABI_ROUTES.faq]: '/og/faq.jpg',
  default: '/og/default.jpg',
};

export function ogImageForPath(pathname: string): string {
  const path = pathname.endsWith('/') || pathname === '' ? pathname || '/' : `${pathname}/`;
  return OG_IMAGES[path] ?? OG_IMAGES.default!;
}

export const SITEMAP_IMAGES: Record<string, { loc: string; title: string }[]> = {
  [ABI_ROUTES.home]: [
    { loc: `${SITE_URL}${BODYCAM_HERO}`, title: PLACEHOLDER_ALT.hero },
    { loc: `${SITE_URL}${BODYCAM_IMAGES.espIndoorWallhack.src}`, title: BODYCAM_IMAGES.espIndoorWallhack.alt },
  ],
  [ABI_ROUTES.pricing]: [
    { loc: `${SITE_URL}/og/pricing.jpg`, title: 'Arena Breakout Infinite cheat pricing' },
    { loc: `${SITE_URL}${BODYCAM_IMAGES.menuVisuals.src}`, title: BODYCAM_IMAGES.menuVisuals.alt },
  ],
  [ABI_ROUTES.aimbot]: [
    { loc: `${SITE_URL}${BODYCAM_IMAGES.menuWeapon.src}`, title: BODYCAM_IMAGES.menuWeapon.alt },
    { loc: `${SITE_URL}${BODYCAM_IMAGES.aimbotFovOutdoor.src}`, title: BODYCAM_IMAGES.aimbotFovOutdoor.alt },
  ],
  [ABI_ROUTES.esp]: [
    { loc: `${SITE_URL}${BODYCAM_IMAGES.menuVisuals.src}`, title: BODYCAM_IMAGES.menuVisuals.alt },
    { loc: `${SITE_URL}${BODYCAM_IMAGES.espRooftop.src}`, title: BODYCAM_IMAGES.espRooftop.alt },
  ],
  [ABI_ROUTES.cloudDma]: [
    { loc: `${SITE_URL}/og/cloud-dma.jpg`, title: 'Cloud DMA for Arena Breakout Infinite' },
    { loc: `${SITE_URL}${BODYCAM_HERO}`, title: PLACEHOLDER_ALT.hero },
  ],
  [ABI_ROUTES.cloudDmaSetup]: [
    { loc: `${SITE_URL}/og/cloud-dma-setup.jpg`, title: 'Cloud DMA setup guide' },
    { loc: `${SITE_URL}${BODYCAM_IMAGES.espLootCorridor.src}`, title: BODYCAM_IMAGES.espLootCorridor.alt },
  ],
};

export const KEYWORD_REDIRECTS: [string, string][] = [
  ['/pricing', ABI_ROUTES.pricing],
  ['/pricing/', ABI_ROUTES.pricing],
  ['/cloud-dma', ABI_ROUTES.cloudDma],
  ['/cloud-dma/', ABI_ROUTES.cloudDma],
  ['/bodycam-hacks', '/'],
  ['/bodycam-hacks/', '/'],
  ['/bodycam-cheats', '/'],
  ['/bodycam-cheats/', '/'],
  ['/bodycam-esp', ABI_ROUTES.esp],
  ['/bodycam-esp/', ABI_ROUTES.esp],
  ['/bodycam-aimbot', ABI_ROUTES.aimbot],
  ['/bodycam-aimbot/', ABI_ROUTES.aimbot],
  ['/bodycam-cheats-price', ABI_ROUTES.pricing],
  ['/bodycam-cheats-price/', ABI_ROUTES.pricing],
  ['/bodycam-requirements', '/'],
  ['/bodycam-requirements/', '/'],
  ['/guides/system-requirements', '/'],
  ['/guides/system-requirements/', '/'],
  ['/cloud-dma-for-bodycam', ABI_ROUTES.cloudDma],
  ['/cloud-dma-for-bodycam/', ABI_ROUTES.cloudDma],
  ['/hwid-spoofer', ABI_ROUTES.hwidSpoofer],
  ['/hwid-spoofer/', ABI_ROUTES.hwidSpoofer],
  ['/cheats', '/'],
  ['/cheats/', '/'],
  ['/products/dota-2-cheats', '/'],
  ['/products/dota-2-cheats/', '/'],
  ['/go/main-product', '/go/abi/'],
  ['/go/main-product/', '/go/abi/'],
  ['/go/bodycam', '/go/abi/'],
  ['/go/bodycam/', '/go/abi/'],
  ['/cloud-dma-setup', ABI_ROUTES.cloudDmaSetup],
  ['/cloud-dma-setup/', ABI_ROUTES.cloudDmaSetup],
  ['/sitemap-index.xml', '/sitemap.xml'],
  ['/sitemap-0.xml', '/sitemap.xml'],
];
