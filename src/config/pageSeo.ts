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
  title: 'ABI Cheats FAQ | Plans, Cloud DMA & Checkout',
  description:
    'Answers on Arena Breakout Infinite cheat plans, Cloud DMA licensing, Windows requirements, checkout delivery, and setup before you buy.',
};
PAGE_SEO['/support/'] = {
  title: 'ABI Cheats Support | Checkout & Delivery',
  description:
    'Help with ABI checkout, license email delivery, Cloud DMA Hyper-V setup, and Windows compatibility checks before launch.',
};
PAGE_SEO['/about/'] = {
  title: 'About ABI Cheats | Independent PC Guides',
  description:
    'ABI Cheats publishes Arena Breakout Infinite PC software guides, pricing, Cloud DMA setup, and support resources.',
};
PAGE_SEO['/privacy/'] = {
  title: 'ABI Cheats Privacy Policy | Cookies & Analytics',
  description: 'How abi-cheats.com uses privacy-friendly analytics, cookies, support email, and retention on this static site.',
};
PAGE_SEO['/terms/'] = {
  title: 'Terms of Use | ABI Cheats & Cloud DMA',
  description:
    'Terms for ABI cheat and Cloud DMA purchases via external checkout, license delivery, refund limits, and acceptable use of our guides.',
};
PAGE_SEO['/guides/cloud-dma-setup/'] = {
  title: 'Cloud DMA Setup for ABI | Hyper-V Walkthrough',
  description:
    'Hyper-V setup for Cloud DMA on one PC: enable virtualization, allocate RAM, finish activation, and verify before loading Arena Breakout Infinite.',
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
