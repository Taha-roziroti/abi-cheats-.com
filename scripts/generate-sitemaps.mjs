import fs from 'node:fs';
import path from 'node:path';

const SITE_HOST = 'abi-cheats.com';
const SITE_URL = `https://${SITE_HOST}`;
const ABI = (file) => `${SITE_URL}/images/abi/${file}`;

/** Keep in sync with src/data/site.ts SITEMAP_IMAGES */
const SITEMAP_IMAGES = {
  '/': [
    { loc: ABI('abi-hero.webp'), title: 'Arena Breakout Infinite gameplay with ESP and aimbot overlays' },
    { loc: ABI('abi-esp-wallhack.webp'), title: 'Arena Breakout Infinite ESP wallhack screenshot' },
  ],
  '/arena-breakout-infinite-cheats-pricing/': [
    { loc: `${SITE_URL}/og/pricing.jpg`, title: 'Arena Breakout Infinite cheat pricing' },
    { loc: ABI('abi-menu-visuals.webp'), title: 'Arena Breakout Infinite cheat Visuals menu' },
  ],
  '/arena-breakout-infinite-aimbot/': [
    { loc: ABI('abi-menu-weapon.webp'), title: 'Arena Breakout Infinite weapon recoil menu' },
    { loc: ABI('abi-aimbot-fov.webp'), title: 'Arena Breakout Infinite aimbot FOV screenshot' },
  ],
  '/arena-breakout-infinite-esp/': [
    { loc: ABI('abi-menu-visuals.webp'), title: 'Arena Breakout Infinite cheat Visuals menu' },
    { loc: ABI('abi-esp-rooftop.webp'), title: 'Arena Breakout Infinite rooftop ESP screenshot' },
  ],
  '/cloud-dma-for-arena-breakout-infinite/': [
    { loc: `${SITE_URL}/og/cloud-dma.jpg`, title: 'Cloud DMA for Arena Breakout Infinite' },
    { loc: ABI('abi-hero.webp'), title: 'Arena Breakout Infinite gameplay hero' },
  ],
  '/guides/cloud-dma-setup/': [
    { loc: `${SITE_URL}/og/cloud-dma-setup.jpg`, title: 'Cloud DMA setup guide' },
    { loc: ABI('abi-esp-loot-corridor.webp'), title: 'Arena Breakout Infinite loot ESP corridor' },
  ],
};

const root = process.cwd();
const dist = path.join(root, 'dist');
const source = path.join(dist, 'sitemap-0.xml');
const lastmodPath = path.join(root, 'src', 'data', 'sitemap-lastmod.json');
const routeLastmod = fs.existsSync(lastmodPath)
  ? JSON.parse(fs.readFileSync(lastmodPath, 'utf8'))
  : {};

if (!fs.existsSync(source)) {
  console.error('generate-sitemaps: dist/sitemap-0.xml not found — run astro build first.');
  process.exit(1);
}

function pathnameFromLoc(loc) {
  const u = new URL(loc);
  let p = u.pathname;
  if (p !== '/' && !p.endsWith('/')) p = `${p}/`;
  return p;
}

function injectImages(xml) {
  return xml.replace(/<url>([\s\S]*?)<\/url>/g, (block) => {
    const locMatch = block.match(/<loc>([^<]+)<\/loc>/);
    if (!locMatch) return block;
    const pathname = pathnameFromLoc(locMatch[1]);
    const images = SITEMAP_IMAGES[pathname];
    if (!images?.length) return block;
    if (block.includes('image:image')) return block;

    const imageXml = images
      .map(
        (img) => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
    </image:image>`,
      )
      .join('\n');

    return block.replace('</url>', `${imageXml}\n  </url>`);
  });
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function applyRouteLastmod(xml) {
  return xml.replace(/<url>([\s\S]*?)<\/url>/g, (block) => {
    const locMatch = block.match(/<loc>([^<]+)<\/loc>/);
    if (!locMatch) return block;
    let pathname;
    try {
      pathname = new URL(locMatch[1]).pathname;
      if (pathname !== '/' && !pathname.endsWith('/')) pathname = `${pathname}/`;
    } catch {
      return block;
    }
    const date = routeLastmod[pathname];
    if (!date) return block;
    const iso = date.includes('T')
      ? date.endsWith('Z')
        ? date
        : `${date}Z`
      : `${date}T12:00:00.000Z`;
    if (block.includes('<lastmod>')) {
      return block.replace(/<lastmod>[^<]+<\/lastmod>/, `<lastmod>${iso}</lastmod>`);
    }
    return block.replace('</url>', `  <lastmod>${iso}</lastmod>\n  </url>`);
  });
}

let raw = fs.readFileSync(source, 'utf8');
raw = raw.replace(/^<\?xml[^?]*\?\>\s*/, '');

if (!raw.includes('xmlns:image=')) {
  raw = raw.replace(
    '<urlset',
    '<urlset xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"',
  );
}

const withImages = applyRouteLastmod(injectImages(raw));
const styled = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.css"?>\n${withImages}`;
const formatted = styled
  .replace(/<urlset([^>]*)>/, '<urlset$1>\n')
  .replace(/<\/urlset>/, '\n</urlset>\n');

fs.writeFileSync(path.join(dist, 'sitemap.xml'), formatted, 'utf8');
fs.writeFileSync(path.join(dist, 'sitemap-0.xml'), formatted, 'utf8');

const urlCount = (formatted.match(/<url>/g) ?? []).length;
console.log(`generate-sitemaps: ${urlCount} URLs with image namespace → dist/sitemap.xml`);

const cssSrc = path.join(root, 'public', 'sitemap.css');
if (fs.existsSync(cssSrc)) {
  fs.copyFileSync(cssSrc, path.join(dist, 'sitemap.css'));
}

for (const rel of ['og', '_redirects', 'robots.txt']) {
  const from = path.join(root, 'public', rel);
  const to = path.join(dist, rel);
  if (fs.existsSync(from) && fs.statSync(from).isDirectory()) {
    fs.cpSync(from, to, { recursive: true });
  }
}
