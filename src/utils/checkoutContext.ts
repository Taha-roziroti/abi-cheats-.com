import { ABI_ROUTES } from '../config/routes';
import { CHECKOUT_HUB_PATH, checkoutPath } from '../config/checkout';

export type CheckoutProductId = 'main-product' | 'cloud-dma' | 'hwid-spoofer';

const LOCKED_PRODUCT_BY_ROUTE: Record<string, CheckoutProductId> = {
  [ABI_ROUTES.pricing]: 'main-product',
  [ABI_ROUTES.aimbot]: 'main-product',
  [ABI_ROUTES.esp]: 'main-product',
  [ABI_ROUTES.cloudDma]: 'cloud-dma',
  [ABI_ROUTES.cloudDmaSetup]: 'cloud-dma',
  [ABI_ROUTES.hwidSpoofer]: 'hwid-spoofer',
};

export function normalizeSitePath(pathname: string): string {
  let p = pathname || '/';
  if (!p.startsWith('/')) p = `/${p}`;
  if (p !== '/' && !p.endsWith('/')) p = `${p}/`;
  return p;
}

export function lockedCheckoutProduct(pathname: string): CheckoutProductId | null {
  return LOCKED_PRODUCT_BY_ROUTE[normalizeSitePath(pathname)] ?? null;
}

export function checkoutHrefForProduct(product: CheckoutProductId): string {
  switch (product) {
    case 'cloud-dma':
      return checkoutPath('cloudDma');
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    default:
      return checkoutPath('mainProduct');
  }
}

export function primaryBuyHref(pathname: string): string {
  const locked = lockedCheckoutProduct(pathname);
  if (locked) return checkoutHrefForProduct(locked);
  return CHECKOUT_HUB_PATH;
}

export function opensCheckoutHub(pathname: string): boolean {
  return lockedCheckoutProduct(pathname) === null;
}

/** Props for buy CTAs: hub dialog on generic pages, plain link on product pages. */
export function buyCtaAttrs(pathname: string): { href: string; 'data-checkout-hub'?: '' } {
  const href = primaryBuyHref(pathname);
  if (opensCheckoutHub(pathname)) {
    return { href, 'data-checkout-hub': '' };
  }
  return { href };
}

export function checkoutPanelHeading(product: CheckoutProductId): string {
  switch (product) {
    case 'cloud-dma':
      return 'Cloud DMA license';
    case 'hwid-spoofer':
      return 'HWID Spoofer';
    default:
      return 'Select a plan';
  }
}
