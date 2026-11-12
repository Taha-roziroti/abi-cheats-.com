import type { AbiPage } from './types';

export const homePage: AbiPage = {
  slug: '/',
  seo: {
    title: 'Arena Breakout Infinite Cheats | ESP, Aimbot & Plans',
    description:
      'Arena Breakout Infinite cheats on Windows PC: player ESP, aimbot options, loot overlays, $35 monthly and $150 lifetime plans, plus Cloud DMA setup guides.',
  },
  h1: 'Arena Breakout Infinite Cheats',
  introduction: `Raids in Arena Breakout Infinite rarely play out the way they look on a minimap. Corners talk, footsteps lie, and the best loot often sits one gunfight away from a bad decision.

ABI Cheats is a Windows PC guide to the overlay stack sellers list for this game—not a generic “all games” marketplace. We break down what the menus actually expose, what Cloud DMA changes on your machine, and how monthly versus lifetime checkout works before you pay.

Skim the feature grid above for a quick visual tour, then use the sections below when you want the slower, written walkthrough with links to deeper pages.`,
  sections: [
    {
      heading: 'ESP, combat tuning, and how this guide is organized',
      paragraphs: [
        `You will not find vague “fully unlocked” marketing here. Pages track real menu tabs—visuals, weapons, aim tuning—and spell out which toggles belong to ESP, which belong to combat assist, and which are pure quality-of-life options. Screenshots on each guide match the current ABI listing so you can compare names in the UI with names in the prose. When a module moves after a patch, we update the matching page rather than leaving stale labels online.`,
        `Think of ESP as a second HUD on top of the raid. Player markers can show health, weapon type, or bone lines; AI bots get their own color rules so you do not confuse scavs with PMCs in a hurry. Boxes, snaplines, and inventory panels can be mixed to keep the screen readable instead of turning into Christmas lights. The dedicated ESP guide walks through each toggle with photos—start there when you are wiring a minimalist layout.`,
        `Container runs live or die on knowing which duffel is worth opening. Loot ESP surfaces item value bands, corpse payouts, and distance filters so you can ignore pocket change while pushing toward extracts. Price floors and max-distance sliders matter more on indoor maps where clutter stacks up fast; we explain how those filters interact with corpse ESP on the ESP page rather than repeating every slider name here.`,
        `Aim assist menus are less about “on/off” and more about constraints: FOV cone width, smoothing speed, whether knocked players are ignored, and which mouse button arms the feature. Pair those combat settings with the weapon tab—recoil strength, sway, no-spread options—and you get a loadout-specific profile instead of one global slider. The aimbot guide breaks down each control with in-game captures when you want line-by-line detail.`,
      ],
    },
    {
      heading: 'Windows PC requirements, Cloud DMA, and launch readiness',
      paragraphs: [
        `Seller checklists for ABI still assume a modern Windows 10 or 11 box with TPM, Secure Boot, HVCI, and Core Isolation enabled. Budget at least 8 GB of RAM (16 GB is saner for Hyper-V) and a recent NVIDIA or AMD GPU. Match CPU and GPU notes on the product page before you buy—laptops with virtualization disabled need fixing before Cloud DMA even enters the picture.`,
        `Full functionality on supported builds also expects Cloud DMA provisioned on the same PC. Treat that license as infrastructure, not a cosmetic add-on: Hyper-V, optional GREENWARD activation, and sometimes separate server fees all sit outside the core cheat checkout. Read the Cloud DMA guide for the one-PC Hyper-V walkthrough before you add that line item to your cart.`,
        `After patches, skim Support and the requirements guides even if nothing failed overnight. Game and Windows updates can shift compatibility flags; documenting your build number and any loader errors early saves back-and-forth with support.`,
      ],
    },
    {
      heading: 'Plans, separate checkouts, and where to go next',
      paragraphs: [
        `Checkout stays split on purpose. The main cheat plan bills at **$35** for a 30-day window or **$150** for lifetime access on the listing we mirror. Cloud DMA is its own **$50** lifetime line item, and the HWID utility—when offered—never shares a cart with the core cheat. Open the pricing page when you need duration fine print (31-day monthly cadence, renewal rules, what happens when a seller pauses sales).`,
        `Pick Cloud DMA only after you have read the Hyper-V guide; skipping that order costs more time than money. When you are ready to compare carts, use the plan carousel above or jump straight to pricing for the fee table. Deeper dives live on the ESP, aimbot, and Cloud DMA routes linked below—use them when a single paragraph here is not enough.`,
      ],
      bullets: [
        'Main cheat — $35 monthly or $150 lifetime',
        'Cloud DMA infrastructure — $50 lifetime license',
        'HWID utility — separate checkout when listed',
        'Each product keeps its own secure payment link',
      ],
    },
  ],
  faqs: [
    {
      question: 'What features are included with Arena Breakout Infinite cheats?',
      answer: `The seller listing groups player and AI ESP, loot and corpse readouts, weapon/recoil helpers, and a full aimbot tab with FOV, smoothing, filters, and keybinds. This homepage summarizes them; the ESP and aimbot guides carry the screenshot-by-screenshot detail.`,
    },
    {
      question: 'Does the ABI cheat include loot ESP?',
      answer: `Yes. Inventory value overlays, corpse payout tags, and min-price filters are part of the visuals stack. Turn distance limits down when you are looting tight hallways so the overlay stays readable.`,
    },
    {
      question: 'Which Windows versions are supported?',
      answer: `Plans target Windows 10 and 11 with HVCI, Core Isolation, TPM, and Secure Boot turned on. Match the seller’s CPU/GPU notes before you buy—laptops with disabled virtualization need fixing before Cloud DMA even enters the picture.`,
    },
    {
      question: 'Is Cloud DMA required for Arena Breakout Infinite?',
      answer: `On supported builds, sellers mark Cloud DMA as required for the complete feature set. It is a standalone license with its own Hyper-V checklist, not a checkbox inside the cheat menu.`,
    },
    {
      question: 'What access durations are available?',
      answer: `You can choose a 31-day monthly pass or a lifetime cheat license, each with its own checkout URL. Cloud DMA stays on a separate $50 lifetime link even if you already own the main plan.`,
    },
  ],
  internalLinks: [
    { text: 'Deep dive: Arena Breakout Infinite ESP', href: '/arena-breakout-infinite-esp/' },
    { text: 'Line-by-line aimbot settings', href: '/arena-breakout-infinite-aimbot/' },
    { text: 'Compare monthly and lifetime pricing', href: '/arena-breakout-infinite-cheats-pricing/' },
    { text: 'Cloud DMA license overview', href: '/cloud-dma-for-arena-breakout-infinite/' },
  ],
  cta: {
    heading: 'Ready to compare plans?',
    text: 'Jump to the plan carousel for checkout links, or open the pricing guide when you want the full fee breakdown first.',
    button: 'View plan options',
    href: '#plans',
  },
};
