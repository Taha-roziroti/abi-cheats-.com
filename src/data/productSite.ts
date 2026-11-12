import { checkoutPath } from '../config/checkout';
import { LISTED_PRICES } from './site';
import { MONTHLY_ACCESS_DAYS } from './productPricing';

export const PUBLISHER_DISCLAIMER =
  'ABI Cheats (abi-cheats.com) publishes PC setup guides, pricing summaries, and FAQ for Arena Breakout Infinite software.';

export const FEATURE_TOOL_DISCLAIMER =
  'Listings describe seller-published ESP, aimbot, and related tools. We do not claim undetected status, zero ban risk, or official endorsement.';

export const CLOUD_DMA_ADDITIONAL_SERVICES = [
  {
    name: 'GREENWARD',
    summary: 'Separate activation and routing service required for Cloud DMA when named on the seller listing.',
  },
  {
    name: 'Static Server',
    summary: 'Dedicated server component with its own fee when required by the seller.',
  },
  {
    name: 'AWS',
    summary: 'Cloud resources with separate billing when listed outside the base Cloud DMA license.',
  },
] as const;

export const MAIN_PRODUCT_CHECKOUT = checkoutPath('mainProduct');
export const CLOUD_DMA_CHECKOUT = checkoutPath('cloudDma');
export const HWID_SPOOFER_CHECKOUT = checkoutPath('hwidSpoofer');

export const mainProductOffers = [
  {
    name: 'Arena Breakout Infinite Cheats — Monthly',
    priceUsd: LISTED_PRICES.monthlyUsd,
    url: MAIN_PRODUCT_CHECKOUT,
  },
  {
    name: 'Arena Breakout Infinite Cheats — Lifetime',
    priceUsd: LISTED_PRICES.lifetimeUsd,
    url: MAIN_PRODUCT_CHECKOUT,
  },
] as const;

export const cloudDmaOffer = {
  name: 'Cloud DMA for Arena Breakout Infinite (lifetime)',
  priceUsd: LISTED_PRICES.cloudDmaLifetimeUsd,
  url: CLOUD_DMA_CHECKOUT,
} as const;

export const hwidSpooferOffer = {
  name: 'HWID Spoofer (lifetime)',
  priceUsd: 50,
  url: HWID_SPOOFER_CHECKOUT,
} as const;

export const mainProductFeatures = [
  'Seller-listed ESP and aimbot modules (update from listing)',
  'Monthly and lifetime plan options',
  'Windows PC client per seller documentation',
  'Cloud DMA prerequisite on supported builds',
  'Secure checkout via external partner',
  'Independent setup and FAQ guides on this site',
] as const;

export const mainProductClientRequirements = [
  'Supported client: Arena Breakout Infinite on Windows PC per seller',
  'Windows 10 or Windows 11 (64-bit) when listed',
  'RAM, GPU, and security settings per seller checklist',
  'Cloud DMA environment when required for full functionality',
] as const;

export const cloudDmaRequirements = [
  'Windows 10 or Windows 11 64-bit with Hyper-V capable edition',
  'CPU virtualization enabled in firmware and Windows',
  'RAM guidance per seller (16 GB recommended for guest workloads)',
  'Stable internet connection',
  'Secure Boot and Core Isolation compatible with Hyper-V setup',
] as const;

export const monthlyPlanCopy = {
  priceUsd: LISTED_PRICES.monthlyUsd,
  durationLabel: `${MONTHLY_ACCESS_DAYS}-day access`,
  renewal: 'Each monthly payment extends access per seller checkout terms.',
} as const;

export const lifetimePlanCopy = {
  priceUsd: LISTED_PRICES.lifetimeUsd,
  durationLabel: 'Lifetime access',
  renewal: 'One-time payment for ongoing access while the seller listing remains available.',
} as const;
