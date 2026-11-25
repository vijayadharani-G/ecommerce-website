/* Service worker: network-first with offline cache fallback */
const CACHE = 'electromart-v7';
const ASSETS = ['index.html', 'cart.html', 'login.html', 'register.html', 'tracking.html', 'wishlist.html', 'product.html', 'gifts.html', 'js/gifts.js', 'css/style.css',
  'js/products.js', 'js/common.js', 'js/smart.js', 'js/assistant.js', 'js/shop.js', 'js/cart.js', 'js/auth.js', 'js/tracking.js', 'js/wishlist.js', 'js/product.js', 'js/price.js', 'js/stores.js', 'js/emi.js', 'js/resale.js', 'js/recovery.js', 'js/imagesearch.js', 'js/features.js', 'js/image-index.js', 'icons/icon.svg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(ASSETS.map(a => c.add(a)))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(fetch(r).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); return res; }).catch(() => caches.match(r)));
});
