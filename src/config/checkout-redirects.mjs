/** Zadeyo affiliate gateway — ABI checkout redirects (external targets only). */
const AFFILIATE_GO = 'https://zadeyo.com/go/TAHA';

function affiliateTo(productPath) {
  return `${AFFILIATE_GO}?to=${encodeURIComponent(productPath)}`;
}

export const CHECKOUT_URLS = {
  mainProduct: affiliateTo('/products/abi'),
  cloudDma: affiliateTo('/products/cloud-dma'),
  dota2: 'https://zadeyo.com/products/dota-2',
  skinChanger: 'https://zadeyo.com/products/skin-changer',
  hwidSpoofer: affiliateTo('/products/hwid-spoofer'),
  ugc: 'https://zadeyo.com/products/ugc',
};

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/abi', CHECKOUT_URLS.mainProduct],
  ['/go/abi/', CHECKOUT_URLS.mainProduct],
  ['/go/bodycam', CHECKOUT_URLS.mainProduct],
  ['/go/bodycam/', CHECKOUT_URLS.mainProduct],
  ['/go/main-product', CHECKOUT_URLS.mainProduct],
  ['/go/main-product/', CHECKOUT_URLS.mainProduct],
  ['/go/cloud-dma', CHECKOUT_URLS.cloudDma],
  ['/go/cloud-dma/', CHECKOUT_URLS.cloudDma],
  ['/go/dota-2', CHECKOUT_URLS.dota2],
  ['/go/dota-2/', CHECKOUT_URLS.dota2],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

function mergeSearchParams(destination, search) {
  if (!search || search === '?') return destination;
  const raw = search.startsWith('?') ? search.slice(1) : search;
  if (!raw) return destination;
  const dest = new URL(destination);
  const extra = new URLSearchParams(raw);
  for (const [key, value] of extra) {
    dest.searchParams.set(key, value);
  }
  return dest.toString();
}

export function resolveCheckoutPathRedirect(pathname, search = '') {
  if (pathname === '/go' || pathname === '/go/') return null;

  let base =
    CHECKOUT_PATH_REDIRECTS.get(pathname) ??
    (pathname !== '/' && !pathname.endsWith('/')
      ? (CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null)
      : null);

  if (!base) return null;
  return mergeSearchParams(base, search);
}

const REDIRECT_FN = `function (destination) {
  try {
    var url = new URL(destination, window.location.origin);
    var incoming = new URLSearchParams(window.location.search);
    incoming.forEach(function (value, key) { url.searchParams.set(key, value); });
    window.location.replace(url.toString());
  } catch (e) {
    window.location.replace(destination);
  }
}`;

/** Minimal bridge page — merges query params, then replaces location (no intermediate UI). */
export function checkoutBridgeHtml(destination) {
  const safe = destination.replace(/</g, '\\u003c');
  return `<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="referrer" content="no-referrer" />
  <title>Secure checkout</title>
</head>
<body>
  <p hidden aria-live="polite">Opening secure checkout…</p>
  <script>(${REDIRECT_FN})(${JSON.stringify(safe)})</script>
</body>
</html>`;
}

export function checkoutRedirectLines() {
  const seen = new Set();
  const lines = [];
  for (const [from, to] of CHECKOUT_PATH_REDIRECTS) {
    if (seen.has(from)) continue;
    seen.add(from);
    lines.push(`${from} ${to} 302`);
  }
  return lines.sort((a, b) => a.localeCompare(b));
}
