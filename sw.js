// Keeps the app working backstage with no signal.
// Pages: ask the server for the newest copy first (so updates arrive), fall back to the saved copy.
// Everything else (icons, fonts, PDF tools): use the saved copy, fetch and save if missing.
const CACHE = 'showtasks-v18';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  // 'reload' skips the browser's own cache, so a new version never saves an old page
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, {cache: 'reload'})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    // 'no-cache' checks with the server every time there's signal, instead of trusting a stored copy
    e.respondWith(fetch(req.url, {cache: 'no-cache'})
      .then(res => { if (res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put('index.html', copy)); } return res; })
      .catch(() => caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
