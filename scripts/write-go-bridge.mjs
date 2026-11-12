/**
 * Instant /go/* bridge pages (preview & hosts without edge redirects).
 * Production still uses public/_redirects 302 when supported.
 */
import fs from 'node:fs';
import path from 'node:path';
import {
  CHECKOUT_PATH_REDIRECTS,
  checkoutBridgeHtml,
} from '../src/config/checkout-redirects.mjs';

const dist = path.join(process.cwd(), 'dist');

const written = new Set();

for (const [from, to] of CHECKOUT_PATH_REDIRECTS) {
  const route = from.endsWith('/') ? from : `${from}/`;
  if (route === '/go/' || written.has(route)) continue;
  written.add(route);

  const rel = route.replace(/^\//, '');
  const dir = path.join(dist, rel);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), checkoutBridgeHtml(to), 'utf8');
}

console.log(`write-go-bridge: ${written.size} checkout bridges → dist/go/*/`);
