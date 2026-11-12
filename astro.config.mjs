import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://abi-cheats.com',
  trailingSlash: 'always',
  redirects: {
    '/pricing/': '/arena-breakout-infinite-cheats-pricing/',
    '/guides/system-requirements/': '/',
    '/cloud-dma/': '/cloud-dma-for-arena-breakout-infinite/',
    '/go/main-product/': '/go/abi/',
    '/go/bodycam/': '/go/abi/',
    '/cloud-dma-setup/': '/guides/cloud-dma-setup/',
    '/bodycam-hacks/': '/',
    '/bodycam-cheats/': '/',
    '/bodycam-esp/': '/arena-breakout-infinite-esp/',
    '/bodycam-aimbot/': '/arena-breakout-infinite-aimbot/',
    '/bodycam-cheats-price/': '/arena-breakout-infinite-cheats-pricing/',
    '/bodycam-requirements/': '/',
    '/cloud-dma-for-bodycam/': '/cloud-dma-for-arena-breakout-infinite/',
    '/hwid-spoofer/': '/arena-breakout-infinite-hwid-spoofer/',
    '/cheats/': '/',
    '/products/dota-2-cheats/': '/',
    '/cheats/compare/': '/blog/placeholder-article/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/go/') &&
        !page.includes('/arena-breakout-infinite-hwid-spoofer/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/unslop/**'],
      },
    },
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
