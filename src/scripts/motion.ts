import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
let ctx: gsap.Context | null = null;

declare global {
  interface Window {
    __abiLenis?: Lenis | null;
  }
}

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isInitiallyVisible = (el: Element) =>
  el.getBoundingClientRect().top < window.innerHeight * 0.9;

const tick = (time: number) => lenis?.raf(time * 1000);

const variants: Record<string, gsap.TweenVars> = {
  up: { y: 40 },
  left: { x: -40 },
  right: { x: 40 },
  scale: { scale: 0.95 },
  '3d': { y: 40, rotateX: 12, transformPerspective: 900, transformOrigin: '50% 100%' },
};

function setupReveals() {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    if (isInitiallyVisible(el)) return;
    const v = variants[el.dataset.reveal || 'up'] ?? variants.up;
    gsap.from(el, {
      opacity: 0,
      ...v,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });
}

function setupStagger() {
  gsap.utils.toArray<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
    const items = Array.from(group.children);
    if (!items.length || isInitiallyVisible(group)) return;
    gsap.from(items, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: { trigger: group, start: 'top 85%', once: true },
    });
  });
}

function setupParallax() {
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const amount = parseFloat(el.dataset.parallax || '') || 8;
    gsap.fromTo(
      el,
      { yPercent: -amount },
      {
        yPercent: amount,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    );
  });
}

function setupHashAnchors() {
  document.addEventListener('click', (event) => {
    if (!lenis) return;
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link || link.hasAttribute('data-scroll-target')) return;
    const hash = link.getAttribute('href');
    if (!hash || hash === '#') return;
    const el = document.getElementById(hash.slice(1));
    if (!el) return;
    event.preventDefault();
    lenis.scrollTo(el, { offset: -96, duration: 1.1 });
  });
}

export function initMotion() {
  if (prefersReducedMotion()) return;

  lenis = new Lenis();
  window.__abiLenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  ctx = gsap.context(() => {
    setupReveals();
    setupStagger();
    setupParallax();
  });

  setupHashAnchors();

  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}

export function destroyMotion() {
  ctx?.revert();
  ctx = null;
  gsap.ticker.remove(tick);
  lenis?.destroy();
  lenis = null;
  window.__abiLenis = null;
}
