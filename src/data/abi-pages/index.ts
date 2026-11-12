import type { AbiPage } from './types';
import { aimbotPage } from './aimbot.ts';
import { cloudDmaPage } from './cloudDma.ts';
import { espPage } from './esp.ts';
import { homePage } from './home.ts';
import { hwidSpooferPage } from './hwidSpoofer.ts';
import { pricingPage } from './pricing.ts';

export const abiPages = {
  home: homePage,
  esp: espPage,
  aimbot: aimbotPage,
  pricing: pricingPage,
  cloudDma: cloudDmaPage,
  hwidSpoofer: hwidSpooferPage,
} as const;

export type AbiPageKey = keyof typeof abiPages;

export function getAbiPageBySlug(slug: string): AbiPage | undefined {
  const normalized = slug === '' ? '/' : slug.endsWith('/') ? slug : `${slug}/`;
  return (Object.values(abiPages) as AbiPage[]).find((page) => page.slug === normalized);
}
