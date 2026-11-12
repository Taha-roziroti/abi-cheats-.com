/** Arena Breakout Infinite product screenshots — paths and alt text for ABI Cheats. */

export interface AbiImageSlot {
  src: string;
  alt: string;
}

export const ABI_IMAGES = {
  hero: {
    src: '/images/abi/abi-hero.webp',
    alt: 'Tactical operator overlooking a misty battlefield, representing Arena Breakout Infinite PC cheat guides',
  },
  menuVisuals: {
    src: '/images/abi/abi-menu-visuals.webp',
    alt: 'Arena Breakout Infinite cheat menu showing Visuals tab with player ESP, bot ESP, skeleton and loot settings',
  },
  menuWeapon: {
    src: '/images/abi/abi-menu-weapon.webp',
    alt: 'Arena Breakout Infinite aimbot menu showing weapon recoil control, recoil strength and no-sway toggles',
  },
  espIndoorWallhack: {
    src: '/images/abi/abi-esp-wallhack.webp',
    alt: 'Arena Breakout Infinite ESP screenshot displaying green skeleton overlay and enemy tags through a wall',
  },
  espRooftop: {
    src: '/images/abi/abi-esp-rooftop.webp',
    alt: 'Arena Breakout Infinite ESP with cyan skeleton on a rooftop target viewed through a holographic sight',
  },
  aimbotFovOutdoor: {
    src: '/images/abi/abi-aimbot-fov.webp',
    alt: 'Arena Breakout Infinite aimbot FOV circle on an enemy skeleton behind a van in an industrial yard',
  },
  aimbotScope: {
    src: '/images/abi/abi-aimbot-scope.webp',
    alt: 'Arena Breakout Infinite scoped view with green skeleton ESP on a distant player',
  },
  espLootCorridor: {
    src: '/images/abi/abi-esp-loot-corridor.webp',
    alt: 'Arena Breakout Infinite loot ESP showing player distance tags and item labels in a wood-panel corridor',
  },
} as const satisfies Record<string, AbiImageSlot>;

export type AbiImageKey = keyof typeof ABI_IMAGES;
