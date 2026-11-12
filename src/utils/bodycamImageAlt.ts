import { ABI_IMAGES } from '../data/abiImages';
import { BODYCAM_IMAGES } from '../data/bodycamImages';

/** Map responsive /srcset paths back to catalog master WebP. */
export function normalizeBodycamImageSrc(src: string): string {
  const pathOnly = src.split(/[?#]/)[0];
  return pathOnly.replace(/-\d+\.webp$/i, '.webp');
}

export function bodycamAltForSrc(src: string): string | undefined {
  const normalized = normalizeBodycamImageSrc(src);
  const catalogs = [ABI_IMAGES, BODYCAM_IMAGES];
  for (const catalog of catalogs) {
    for (const entry of Object.values(catalog)) {
      if (normalized === entry.src || src.startsWith(entry.src.replace(/\.webp$/, ''))) {
        return entry.alt;
      }
    }
  }
  if (normalized.includes('/images/blog/')) {
    const slug = normalized
      .replace(/^\/images\/blog\//, '')
      .replace(/-\d+\.webp$/i, '')
      .replace(/\.(png|jpe?g|webp)$/i, '');
    const phrase = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return `Blog header image: ${phrase}`;
  }
  return undefined;
}

export function resolveImageAlt(src: string, fallback: string): string {
  const catalog = bodycamAltForSrc(src);
  if (catalog) return catalog;
  return fallback.trim();
}
