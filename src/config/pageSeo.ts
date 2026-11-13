/**
 * Central titles/descriptions for high-traffic routes.
 */

import { abiPages } from '../data/abi-pages/index.ts';

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = Object.fromEntries(
  Object.values(abiPages).map((page) => [
    page.slug,
    { title: page.seo.title, description: page.seo.description },
  ]),
);

/** Supplemental routes not in the ABI keyword map. */
PAGE_SEO['/faq/'] = {
  title: 'ABI Cheats FAQ | Pricing, Cloud DMA & Checkout Help',
  description:
    'Arena Breakout Infinite FAQ: $35 monthly, $150 lifetime plans, $50 Cloud DMA, Windows requirements, checkout delivery, Hyper-V setup, and HWID help.',
};
PAGE_SEO['/support/'] = {
  title: 'ABI Cheats Support | Checkout, Delivery & Setup Help',
  description:
    'ABI support for checkout, license email, Cloud DMA Hyper-V errors, and Windows 10/11—email support@abi-cheats.com with your order email and screenshots.',
};
PAGE_SEO['/about/'] = {
  title: 'About ABI Cheats | Arena Breakout Infinite PC Guides',
  description:
    'What ABI Cheats publishes: Arena Breakout Infinite ESP and aimbot guides, $35/$150 cheat plans, $50 Cloud DMA license notes, and pre-purchase FAQ.',
};
PAGE_SEO['/privacy/'] = {
  title: 'ABI Cheats Privacy Policy | Cookies, Analytics & Email',
  description:
    'Privacy at abi-cheats.com: optional Google Analytics, minimal cookies, support ticket handling, retention limits, and how to request data deletion.',
};
PAGE_SEO['/terms/'] = {
  title: 'Terms of Use | ABI Cheats Purchases & Refund Policy',
  description:
    'Terms for Arena Breakout Infinite and Cloud DMA purchases: secure checkout, personal license use, final-sale rules, and contacting support with proof.',
};
PAGE_SEO['/guides/cloud-dma-setup/'] = {
  title: 'Cloud DMA Setup for ABI | Hyper-V Walkthrough Guide',
  description:
    'Hyper-V Cloud DMA on one Windows PC: enable virtualization, allocate RAM, finish activation, verify setup, then continue to ABI cheat checkout.',
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
