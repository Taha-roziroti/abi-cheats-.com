/**
 * Keyword-targeted SEO map for abi-cheats.com money pages.
 * Titles and descriptions are the canonical on-page SEO source of truth.
 */

export interface SeoPageInternalLink {
  url: string;
  anchor: string;
}

export interface SeoPageConfig {
  path: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  title: string;
  metaDescription: string;
  h1: string;
  h2: string[];
  schema: string[];
  schemaNotes?: string;
  internalLinks: SeoPageInternalLink[];
  imageAltPattern?: string;
  /** When set, the page ships noindexed until seller compatibility is confirmed. */
  publishCondition?: string;
  noindexUntilPublished?: boolean;
}

export const SEO_PAGES: SeoPageConfig[] = [
  {
    path: '/',
    primaryKeyword: 'Arena Breakout Infinite cheats',
    secondaryKeywords: [
      'buy Arena Breakout Infinite cheats',
      'ABI cheats',
      'Arena Breakout Infinite hacks',
    ],
    title: 'Arena Breakout Infinite Cheats | ABI Cheats',
    metaDescription:
      'Compare ABI ESP and aimbot features, PC requirements, and current plans. Review the details and choose the setup that fits your needs.',
    h1: 'Arena Breakout Infinite Cheats for PC',
    h2: [
      'What the Arena Breakout Infinite Cheat Includes',
      'Player ESP, AI ESP and Visual Features',
      'Aimbot Features and Available Settings',
      'Windows Requirements and Cloud DMA',
      'Available Plans and Purchase Information',
    ],
    schema: ['Product', 'Offer', 'WebPage'],
    schemaNotes:
      'Use Product and Offer only when the actual product, seller, current price and access conditions are visibly represented.',
    internalLinks: [
      { url: '/arena-breakout-infinite-esp/', anchor: 'Arena Breakout Infinite ESP features' },
      { url: '/arena-breakout-infinite-aimbot/', anchor: 'ABI aimbot feature breakdown' },
      { url: '/arena-breakout-infinite-cheats-pricing/', anchor: 'Arena Breakout Infinite pricing and plans' },
    ],
    imageAltPattern: 'Arena Breakout Infinite gameplay screenshot showing [specific visible feature]',
  },
  {
    path: '/arena-breakout-infinite-esp/',
    primaryKeyword: 'Arena Breakout Infinite ESP',
    secondaryKeywords: [
      'Arena Breakout Infinite wallhack',
      'Arena Breakout Infinite player ESP',
      'Arena Breakout Infinite loot ESP',
    ],
    title: 'Arena Breakout Infinite ESP | Player & Loot',
    metaDescription:
      'Explore player, AI, inventory, and loot ESP options for Arena Breakout Infinite. Review the overlay details and related requirements.',
    h1: 'Arena Breakout Infinite ESP',
    h2: [
      'Player and AI ESP Overlays',
      'Loot, Inventory and Item-Value Displays',
      'Understanding ESP and Wallhack Features',
      'Visual Options and Customization',
      'Cloud DMA Requirements for Supported Builds',
    ],
    schema: ['WebPage', 'FAQPage'],
    internalLinks: [
      { url: '/', anchor: 'Arena Breakout Infinite cheat overview' },
      { url: '/arena-breakout-infinite-aimbot/', anchor: 'Explore ABI aimbot options' },
      { url: '/cloud-dma-for-arena-breakout-infinite/', anchor: 'Cloud DMA requirements for ABI' },
    ],
    imageAltPattern:
      'Arena Breakout Infinite ESP screenshot displaying [player, AI, inventory or loot overlay]',
  },
  {
    path: '/arena-breakout-infinite-aimbot/',
    primaryKeyword: 'Arena Breakout Infinite aimbot',
    secondaryKeywords: [
      'buy Arena Breakout Infinite aimbot',
      'ABI aimbot',
      'Arena Breakout Infinite aim assist cheat',
    ],
    title: 'Arena Breakout Infinite Aimbot | ABI Features',
    metaDescription:
      'Review ABI aimbot options, including FOV, smoothing, target filters, and keybinds. Check compatibility and plans before checkout.',
    h1: 'Arena Breakout Infinite Aimbot',
    h2: [
      'ABI Aimbot Features and Configuration',
      'FOV, Smoothness and Target Distance',
      'Visible Checks and Target Filters',
      'Aimbot Customization and Keybind Options',
      'Compatibility and Product Requirements',
    ],
    schema: ['WebPage', 'FAQPage'],
    internalLinks: [
      { url: '/', anchor: 'View the complete Arena Breakout Infinite cheat' },
      { url: '/arena-breakout-infinite-esp/', anchor: 'Arena Breakout Infinite ESP options' },
      { url: '/arena-breakout-infinite-cheats-pricing/', anchor: 'Compare ABI subscription plans' },
    ],
    imageAltPattern: 'Arena Breakout Infinite aimbot menu showing [specific visible setting]',
  },
  {
    path: '/arena-breakout-infinite-cheats-pricing/',
    primaryKeyword: 'Arena Breakout Infinite cheats price',
    secondaryKeywords: [
      'Arena Breakout Infinite monthly cheat price',
      'Arena Breakout Infinite lifetime cheat price',
      'Arena Breakout Infinite cheat plans',
    ],
    title: 'Arena Breakout Infinite Cheats Price & Plans',
    metaDescription:
      'Compare monthly and lifetime ABI cheat plans, plus Cloud DMA and other required services, before deciding what to buy.',
    h1: 'Arena Breakout Infinite Cheats Price & Plans',
    h2: [
      'Monthly vs Lifetime Access',
      'What Is Included in Each Plan?',
      'Cloud DMA Pricing and Requirements',
      'Additional Services and Separate Purchases',
      'Purchase Questions and Checkout Information',
    ],
    schema: ['WebPage', 'FAQPage'],
    internalLinks: [
      { url: '/', anchor: 'View the ABI cheat product' },
      { url: '/cloud-dma-for-arena-breakout-infinite/', anchor: 'Cloud DMA product details' },
      { url: '/arena-breakout-infinite-esp/', anchor: 'Review included ESP features' },
    ],
    imageAltPattern:
      'Arena Breakout Infinite cheat pricing comparison showing [plan or access period]',
  },
  {
    path: '/cloud-dma-for-arena-breakout-infinite/',
    primaryKeyword: 'Cloud DMA for Arena Breakout Infinite',
    secondaryKeywords: [
      'Arena Breakout Infinite Cloud DMA requirements',
      'Cloud DMA price',
      'single-PC Cloud DMA setup',
    ],
    title: 'Cloud DMA for Arena Breakout Infinite | Setup',
    metaDescription:
      'See why Cloud DMA is listed for full ABI functionality, how its single-PC Hyper-V setup works, and which services are billed separately.',
    h1: 'Cloud DMA for Arena Breakout Infinite',
    h2: [
      'Why the ABI Product Lists Cloud DMA',
      'Understanding the Single-PC Hyper-V Setup',
      'Windows and Virtualization Requirements',
      'Cloud DMA Pricing and Separate Purchases',
      'Common Cloud DMA Questions',
    ],
    schema: ['Product', 'Offer', 'WebPage', 'FAQPage'],
    internalLinks: [
      { url: '/', anchor: 'Arena Breakout Infinite cheat product' },
      { url: '/arena-breakout-infinite-cheats-pricing/', anchor: 'Compare ABI product and Cloud DMA pricing' },
      { url: '/arena-breakout-infinite-esp/', anchor: 'Arena Breakout Infinite ESP features' },
    ],
    imageAltPattern: 'Cloud DMA product screenshot showing [actual interface, Hyper-V or setup screen]',
  },
  {
    path: '/arena-breakout-infinite-hwid-spoofer/',
    publishCondition:
      'Publish only after confirming Arena Breakout Infinite PC-client compatibility with the seller.',
    noindexUntilPublished: true,
    primaryKeyword: 'Arena Breakout Infinite HWID spoofer',
    secondaryKeywords: [
      'ABI HWID spoofer',
      'Arena Breakout Infinite HWID ban spoofer',
      'Arena Breakout Infinite spoofer price',
    ],
    title: 'Arena Breakout Infinite HWID Spoofer | ABI',
    metaDescription:
      "Review the ABI HWID spoofer's stated anti-cheat support, Windows requirements, and current plans. Confirm exact game compatibility before checkout.",
    h1: 'Arena Breakout Infinite HWID Spoofer',
    h2: [
      'What the HWID Spoofer Supports',
      'Arena Breakout and Arena Breakout Infinite Compatibility',
      'Windows and System Requirements',
      'Available Access Plans',
      'Common HWID Spoofer Questions',
    ],
    schema: ['Product', 'Offer', 'WebPage', 'FAQPage'],
    schemaNotes:
      'Use current seller-confirmed support information only. Do not claim specific ABI compatibility based solely on generic ACE support.',
    internalLinks: [
      { url: '/', anchor: 'Arena Breakout Infinite cheat overview' },
      { url: '/cloud-dma-for-arena-breakout-infinite/', anchor: 'Cloud DMA requirements' },
      { url: '/arena-breakout-infinite-cheats-pricing/', anchor: 'Product pricing and available plans' },
    ],
    imageAltPattern: 'HWID spoofer product screenshot showing [verified ABI compatibility or interface]',
  },
];

const SEO_BY_PATH = new Map(SEO_PAGES.map((page) => [page.path, page]));

export function getSeoPageConfig(pathname: string): SeoPageConfig | undefined {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return SEO_BY_PATH.get(path);
}
