import { ABI_ROUTES } from '../config/routes';
import { CHECKOUT_HUB_PATH, checkoutPath } from '../config/checkout';
import { checkoutHrefForProduct, lockedCheckoutProduct } from './checkoutContext';
import {
  MAIN_PRODUCT_CHECKOUT,
  mainProductOffers,
  cloudDmaOffer,
  CLOUD_DMA_CHECKOUT,
} from '../data/productSite';
import { BODYCAM_IMAGES } from '../data/bodycamImages';
import { BODYCAM_HERO } from '../data/placeholders';
import { LISTED_PRICES, PRODUCT_ID, SITE_URL } from '../data/site';
import {
  breadcrumbSchema,
  faqPageSchema,
  guideArticleSchema,
  productSchema,
  webPageSchema,
  type BreadcrumbItem,
} from './schema';

const HOME_CRUMB: BreadcrumbItem = { name: 'ABI cheats home', path: '/' };

export function breadcrumbsForRoute(route: string): BreadcrumbItem[] {
  if (route === ABI_ROUTES.home) return [HOME_CRUMB];
  if (route === ABI_ROUTES.pricing) {
    return [HOME_CRUMB, { name: 'Arena Breakout Infinite cheats price', path: ABI_ROUTES.pricing }];
  }
  if (route === ABI_ROUTES.aimbot) {
    return [HOME_CRUMB, { name: 'Arena Breakout Infinite aimbot', path: ABI_ROUTES.aimbot }];
  }
  if (route === ABI_ROUTES.esp) {
    return [HOME_CRUMB, { name: 'Arena Breakout Infinite ESP', path: ABI_ROUTES.esp }];
  }
  if (route === ABI_ROUTES.cloudDma) {
    return [HOME_CRUMB, { name: 'Cloud DMA for Arena Breakout Infinite', path: ABI_ROUTES.cloudDma }];
  }
  if (route === ABI_ROUTES.hwidSpoofer) {
    return [HOME_CRUMB, { name: 'Arena Breakout Infinite HWID spoofer', path: ABI_ROUTES.hwidSpoofer }];
  }
  if (route === ABI_ROUTES.cloudDmaSetup) {
    return [
      HOME_CRUMB,
      { name: 'Cloud DMA for Arena Breakout Infinite', path: ABI_ROUTES.cloudDma },
      { name: 'Hyper-V setup walkthrough', path: ABI_ROUTES.cloudDmaSetup },
    ];
  }
  return [HOME_CRUMB];
}

function productSchemaImage(route: string): string {
  switch (route) {
    case ABI_ROUTES.home:
      return BODYCAM_HERO;
    case ABI_ROUTES.aimbot:
      return BODYCAM_IMAGES.menuWeapon.src;
    case ABI_ROUTES.esp:
      return BODYCAM_IMAGES.menuVisuals.src;
    case ABI_ROUTES.cloudDma:
      return BODYCAM_IMAGES.hero.src;
    default:
      return BODYCAM_HERO;
  }
}

export function jsonLdForContentPage(input: {
  route: string;
  seoTitle: string;
  metaDescription: string;
  schemaTypes: string[];
  articlePublished?: string;
  faqItems?: { q: string; a: string }[];
}): Record<string, unknown>[] {
  const breadcrumbs = breadcrumbsForRoute(input.route);
  const blocks: Record<string, unknown>[] = [];

  if (input.schemaTypes.includes('Product')) {
    if (input.route === ABI_ROUTES.home) {
      blocks.push(
        productSchema({
          name: 'Arena Breakout Infinite Cheats for PC',
          description: input.metaDescription,
          url: input.route,
          offerUrl: MAIN_PRODUCT_CHECKOUT,
          sku: 'arena-breakout-infinite-cheats',
          image: productSchemaImage(input.route),
          productId: PRODUCT_ID,
          offers: [...mainProductOffers],
        }),
      );
    } else if (input.route === ABI_ROUTES.cloudDma) {
      blocks.push(
        productSchema({
          name: 'Cloud DMA for Arena Breakout Infinite',
          description: input.metaDescription,
          url: ABI_ROUTES.cloudDma,
          offerUrl: CLOUD_DMA_CHECKOUT,
          sku: 'cloud-dma-license',
          productId: `${SITE_URL}${ABI_ROUTES.cloudDma}#product`,
          offers: [
            {
              name: cloudDmaOffer.name,
              priceUsd: cloudDmaOffer.priceUsd,
              url: CLOUD_DMA_CHECKOUT,
            },
          ],
        }),
      );
    }
  }

  if (input.schemaTypes.includes('Offer') && input.route === ABI_ROUTES.home) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: 'Arena Breakout Infinite Cheats — Monthly',
      price: LISTED_PRICES.monthlyUsd.toFixed(2),
      priceCurrency: 'USD',
      url: MAIN_PRODUCT_CHECKOUT,
    });
  }

  if (input.schemaTypes.includes('WebPage')) {
    blocks.push(
      webPageSchema({
        name: input.seoTitle,
        description: input.metaDescription,
        url: input.route,
      }),
    );
  }

  const articleTypes = ['Article', 'TechArticle'];
  if (articleTypes.some((t) => input.schemaTypes.includes(t)) && input.articlePublished) {
    blocks.push(
      guideArticleSchema({
        name: input.seoTitle,
        description: input.metaDescription,
        url: input.route,
        datePublished: input.articlePublished,
      }),
    );
  }

  if (input.schemaTypes.includes('BreadcrumbList')) {
    blocks.push(breadcrumbSchema(breadcrumbs));
  }

  if (input.schemaTypes.includes('FAQPage') && input.faqItems?.length) {
    blocks.push(
      faqPageSchema(
        input.faqItems.map((item, index) => ({
          num: String(index + 1).padStart(2, '0'),
          q: item.q,
          a: item.a,
        })),
      ),
    );
  }

  return blocks;
}

export function defaultEndCtaHref(
  route: string,
  _checkout?: 'main-product' | 'cloud-dma' | 'hwid-spoofer',
): string {
  const locked = lockedCheckoutProduct(route);
  if (locked) return checkoutHrefForProduct(locked);
  return CHECKOUT_HUB_PATH;
}
