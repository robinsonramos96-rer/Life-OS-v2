// Offline shell: the app works with no connection; data lives in IndexedDB.
const CACHE = 'lifeos-2.0.0-beta.11';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg', './fonts/hanken-grotesk-latin-400-normal.woff2', './fonts/hanken-grotesk-latin-500-normal.woff2', './fonts/hanken-grotesk-latin-600-normal.woff2', './fonts/hanken-grotesk-latin-700-normal.woff2', './fonts/newsreader-latin-400-normal.woff2', './fonts/newsreader-latin-500-normal.woff2'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (u.origin === location.origin) {
    // network first for the page so updates arrive; cache as fallback offline
    e.respondWith(fetch(e.request).then((r) => { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request).then((m) => m || caches.match('./index.html'))));
  }
});
