import { defineMiddleware } from 'astro:middleware';
import {
  checkoutBridgeHtml,
  resolveCheckoutPathRedirect,
} from './config/checkout-redirects.mjs';

export const onRequest = defineMiddleware((context, next) => {
  const requestUrl = new URL(context.request.url);
  const destination = resolveCheckoutPathRedirect(requestUrl.pathname, requestUrl.search);
  if (destination) {
    return new Response(checkoutBridgeHtml(destination), {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
        'Referrer-Policy': 'no-referrer',
      },
    });
  }
  return next();
});
