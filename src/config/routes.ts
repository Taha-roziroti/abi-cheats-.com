/** Canonical money-page paths for Arena Breakout Infinite (ABI). */

export const ABI_ROUTES = {
  home: '/',
  esp: '/arena-breakout-infinite-esp/',
  aimbot: '/arena-breakout-infinite-aimbot/',
  pricing: '/arena-breakout-infinite-cheats-pricing/',
  cloudDma: '/cloud-dma-for-arena-breakout-infinite/',
  hwidSpoofer: '/arena-breakout-infinite-hwid-spoofer/',
  cloudDmaSetup: '/guides/cloud-dma-setup/',
  faq: '/faq/',
  support: '/support/',
} as const;

export const ABI_MONEY_ROUTES = [
  ABI_ROUTES.home,
  ABI_ROUTES.esp,
  ABI_ROUTES.aimbot,
  ABI_ROUTES.pricing,
  ABI_ROUTES.cloudDma,
] as const;
