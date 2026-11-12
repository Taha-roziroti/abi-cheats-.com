import type { AbiPageKey } from './abi-pages/index.ts';
import { ABI_IMAGES } from './abiImages.ts';

export const ABI_PAGE_HERO: Partial<Record<AbiPageKey, { src: string; alt: string }>> = {
  home: ABI_IMAGES.hero,
  cloudDma: ABI_IMAGES.menuVisuals,
  hwidSpoofer: ABI_IMAGES.hero,
};

export const ABI_PAGE_FIGURES: Record<AbiPageKey, { src: string; alt: string }[]> = {
  home: [
    ABI_IMAGES.espIndoorWallhack,
    ABI_IMAGES.menuVisuals,
    ABI_IMAGES.menuWeapon,
    ABI_IMAGES.espLootCorridor,
  ],
  esp: [ABI_IMAGES.espIndoorWallhack, ABI_IMAGES.espRooftop, ABI_IMAGES.espLootCorridor],
  aimbot: [ABI_IMAGES.aimbotFovOutdoor, ABI_IMAGES.aimbotScope, ABI_IMAGES.menuWeapon],
  pricing: [ABI_IMAGES.menuVisuals, ABI_IMAGES.hero],
  cloudDma: [ABI_IMAGES.menuVisuals, ABI_IMAGES.aimbotScope],
  hwidSpoofer: [ABI_IMAGES.hero],
};
