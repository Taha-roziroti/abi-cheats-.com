import fs from 'node:fs';
import path from 'node:path';
import { abiPages, type AbiPageKey } from '../src/data/abi-pages/index.ts';
import { ABI_IMAGES } from '../src/data/abiImages.ts';
import { ABI_PAGE_FIGURES, ABI_PAGE_HERO } from '../src/data/abiPageMedia.ts';
import { abiPageToMarkdown } from '../src/utils/abiPageMarkdown.ts';
import type { AbiPage } from '../src/data/abi-pages/types.ts';

const root = process.cwd();
const pagesDir = path.join(root, 'content', 'pages');

const FILE_BY_KEY: Record<AbiPageKey, string> = {
  home: 'home.md',
  esp: 'arena-breakout-infinite-esp.md',
  aimbot: 'arena-breakout-infinite-aimbot.md',
  pricing: 'arena-breakout-infinite-cheats-pricing.md',
  cloudDma: 'cloud-dma-for-arena-breakout-infinite.md',
  hwidSpoofer: 'arena-breakout-infinite-hwid-spoofer.md',
};

interface FrontmatterConfig {
  layout: 'product' | 'pricing' | 'article';
  checkout?: 'main-product' | 'cloud-dma' | 'hwid-spoofer';
  schemaTypes: string[];
  articlePublished?: string;
  noindex?: boolean;
  includeHero?: boolean;
}

const META_BY_KEY: Record<AbiPageKey, FrontmatterConfig> = {
  home: {
    layout: 'product',
    checkout: 'main-product',
    schemaTypes: ['Product', 'Offer', 'WebPage'],
    includeHero: true,
  },
  esp: {
    layout: 'article',
    checkout: 'main-product',
    schemaTypes: ['WebPage', 'FAQPage'],
    articlePublished: '2026-03-01',
  },
  aimbot: {
    layout: 'article',
    checkout: 'main-product',
    schemaTypes: ['WebPage', 'FAQPage'],
    articlePublished: '2026-03-01',
  },
  pricing: {
    layout: 'pricing',
    checkout: 'main-product',
    schemaTypes: ['WebPage', 'FAQPage'],
  },
  cloudDma: {
    layout: 'product',
    checkout: 'cloud-dma',
    schemaTypes: ['Product', 'Offer', 'WebPage', 'FAQPage'],
    includeHero: true,
  },
  hwidSpoofer: {
    layout: 'product',
    checkout: 'hwid-spoofer',
    schemaTypes: ['WebPage'],
    noindex: true,
    includeHero: true,
  },
};

function yamlString(value: string): string {
  if (value.includes('\n') || value.includes(':') || value.includes('"')) {
    return JSON.stringify(value);
  }
  return `'${value.replace(/'/g, "''")}'`;
}

function buildFrontmatter(key: AbiPageKey, page: AbiPage): string {
  const meta = META_BY_KEY[key];
  const lines: string[] = ['---', `route: ${page.slug === '/' ? '/' : page.slug}`, `seoTitle: ${yamlString(page.seo.title)}`, `metaDescription: ${yamlString(page.seo.description)}`, 'schemaTypes:'];
  for (const schemaType of meta.schemaTypes) {
    lines.push(`  - ${schemaType}`);
  }
  lines.push(`layout: ${meta.layout}`);
  if (meta.checkout) lines.push(`checkout: ${meta.checkout}`);
  if (meta.articlePublished) lines.push(`articlePublished: '${meta.articlePublished}'`);
  if (meta.noindex || page.draftOnly) lines.push('noindex: true');
  if (meta.includeHero) {
    const hero = ABI_PAGE_HERO[key] ?? ABI_IMAGES.hero;
    lines.push('heroImage:', `  src: ${hero.src}`, `  alt: ${yamlString(hero.alt)}`);
  }
  if (page.cta) {
    lines.push(`endCtaLabel: ${yamlString(page.cta.button)}`, `endCtaHref: ${yamlString(page.cta.href)}`);
  }
  lines.push('figures:');
  for (const fig of ABI_PAGE_FIGURES[key]) {
    lines.push(`  - alt: ${yamlString(fig.alt)}`, `    src: ${fig.src}`);
  }
  lines.push('---', '');
  return lines.join('\n');
}

for (const [key, page] of Object.entries(abiPages) as [AbiPageKey, AbiPage][]) {
  const filename = FILE_BY_KEY[key];
  const includeH1 = page.slug !== '/';
  const body = abiPageToMarkdown(page, { includeH1 });
  const filePath = path.join(pagesDir, filename);
  fs.writeFileSync(filePath, buildFrontmatter(key, page) + body, 'utf8');
  console.log(`sync-abi-content: wrote ${path.relative(root, filePath)}`);
}
