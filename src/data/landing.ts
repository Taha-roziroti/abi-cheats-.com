import type { ProductSlide } from './products';
import { ABI_ROUTES } from '../config/routes';
import { MAIN_PRODUCT_CHECKOUT, CLOUD_DMA_CHECKOUT } from './productSite';
import type { IconName } from '../components/icons/types';
import { ABI_IMAGES } from './abiImages';

export interface LandingCatalogProduct {
  slug: string;
  label: string;
  title: string;
  href: string;
  buyUrl: string;
  features: string[];
  more: number;
  icon: IconName;
  badge?: string;
  variant?: 'essential' | 'popular' | 'limited';
  buyLabel?: string;
  viewLabel?: string;
}

export const landingHeroSlides: ProductSlide[] = [
  {
    src: ABI_IMAGES.hero.src,
    alt: ABI_IMAGES.hero.alt,
    caption: 'ESP & aimbot in-raid',
    captionDesc: 'Player skeleton ESP, loot tags and FOV targeting in Arena Breakout Infinite.',
  },
  {
    src: ABI_IMAGES.espIndoorWallhack.src,
    alt: ABI_IMAGES.espIndoorWallhack.alt,
    caption: 'Wallhack & player ESP',
    captionDesc: 'Skeleton overlays and enemy information through interior cover.',
  },
  {
    src: ABI_IMAGES.menuVisuals.src,
    alt: ABI_IMAGES.menuVisuals.alt,
    caption: 'Visuals menu',
    captionDesc: 'Player ESP, bot ESP, loot filters and skeleton toggles.',
  },
  {
    src: ABI_IMAGES.menuWeapon.src,
    alt: ABI_IMAGES.menuWeapon.alt,
    caption: 'Recoil & weapon control',
    captionDesc: 'Weapon tab with recoil strength and sway options.',
  },
  {
    src: ABI_IMAGES.espLootCorridor.src,
    alt: ABI_IMAGES.espLootCorridor.alt,
    caption: 'Loot & distance ESP',
    captionDesc: 'Player and item distance readouts in raid environments.',
  },
  {
    src: ABI_IMAGES.aimbotScope.src,
    alt: ABI_IMAGES.aimbotScope.alt,
    caption: 'Scoped aimbot view',
    captionDesc: 'Long-range skeleton ESP through magnified optics.',
  },
];

export const landingProducts: LandingCatalogProduct[] = [
  {
    slug: 'abi',
    label: 'Main plan',
    title: 'Arena Breakout Infinite Cheats',
    href: ABI_ROUTES.pricing,
    buyUrl: MAIN_PRODUCT_CHECKOUT,
    variant: 'popular',
    icon: 'coreProduct',
    features: ['ESP & aimbot (per listing)', 'Plan options', 'Windows PC', 'Seller-updated features'],
    more: 2,
    buyLabel: 'Review ABI plans',
    viewLabel: 'Monthly vs lifetime pricing',
  },
  {
    slug: 'cloud-dma',
    label: 'Infrastructure',
    title: 'Cloud DMA for ABI',
    href: ABI_ROUTES.cloudDma,
    buyUrl: CLOUD_DMA_CHECKOUT,
    badge: 'Listed prerequisite',
    variant: 'essential',
    icon: 'reqCpu',
    features: ['Hyper-V single-PC', 'Separate license', 'Add-ons priced separately', 'Setup walkthrough'],
    more: 1,
    buyLabel: 'View Cloud DMA license',
    viewLabel: 'Read Cloud DMA overview',
  },
];

export const landingGuideCards = [
  {
    title: 'ABI cheats price',
    desc: 'Compare monthly and lifetime Arena Breakout Infinite cheat plans.',
    href: ABI_ROUTES.pricing,
    readLabel: 'View pricing',
    image: ABI_IMAGES.menuVisuals,
  },
  {
    title: 'Arena Breakout Infinite aimbot',
    desc: 'FOV, smoothing, filters, and keybind options.',
    href: ABI_ROUTES.aimbot,
    readLabel: 'Aimbot guide',
    image: ABI_IMAGES.aimbotFovOutdoor,
  },
  {
    title: 'Arena Breakout Infinite ESP',
    desc: 'Player, AI, and loot ESP in one guide.',
    href: ABI_ROUTES.esp,
    readLabel: 'ESP guide',
    image: ABI_IMAGES.espRooftop,
  },
];
