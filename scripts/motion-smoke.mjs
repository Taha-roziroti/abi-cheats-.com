/**
 * Quick motion smoke test (Playwright). Run after: npm run build && npm run preview
 */
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const base = 'http://127.0.0.1:4321';
const routes = ['/', '/arena-breakout-infinite-esp/', '/faq/'];

const errors = [];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const preview = spawn('npm', ['run', 'preview'], {
  cwd: root,
  shell: true,
  stdio: 'ignore',
});

await sleep(3500);

const browser = await chromium.launch();
try {
  for (const route of routes) {
    const page = await browser.newPage();
  const logs = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') logs.push(msg.text());
  });

  await page.goto(`${base}${route === '/' ? '' : route}`, { waitUntil: 'networkidle' });

  const heroH1Visible = await page.locator('h1').first().isVisible();
  if (!heroH1Visible) errors.push(`${route}: h1 not visible`);

  const bodyOpacity = await page.evaluate(() => {
    const main = document.getElementById('main-content');
    return main ? getComputedStyle(main).opacity : '0';
  });
  if (bodyOpacity !== '1') errors.push(`${route}: main content opacity ${bodyOpacity}`);

  if (logs.length) errors.push(`${route}: console errors: ${logs.join(' | ')}`);

  await page.close();
  }

  const reduced = await browser.newPage();
  await reduced.emulateMedia({ reducedMotion: 'reduce' });
  await reduced.goto(`${base}/`, { waitUntil: 'networkidle' });
  const hasLenis = await reduced.evaluate(() => Boolean(window.__abiLenis));
  if (hasLenis) errors.push('/: Lenis active under prefers-reduced-motion');
  await reduced.close();
} finally {
  await browser.close();
  preview.kill();
}

if (errors.length) {
  console.error('motion-smoke failed:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log('motion-smoke: OK');
