import { ABI_IMAGES } from './abiImages';

/** Shared placeholder media paths — SVG fallbacks when no product shot exists. */

export const PLACEHOLDER_HERO = '/images/placeholders/hero.svg';
export const PLACEHOLDER_GALLERY = '/images/placeholders/gallery.svg';
export const PLACEHOLDER_BLOG = '/images/placeholders/blog.svg';

/** Primary marketing hero for LCP and product JSON-LD. */
export const BODYCAM_HERO = ABI_IMAGES.hero.src;

export const PLACEHOLDER_ALT = {
  hero: ABI_IMAGES.hero.alt,
  gallery: 'Arena Breakout Infinite product screenshot',
  blog: 'Blog post image placeholder',
} as const;
