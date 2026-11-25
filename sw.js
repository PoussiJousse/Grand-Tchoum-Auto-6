/* TrioLingo service worker · L6 v0.8 · 2026-11-25 : garde l'app hors-ligne. Ne contacte AUCUN autre site.
   - installation : fichiers téléchargés à neuf (cache:"reload"), jamais une vieille copie
   - pages (app et jeu) : réseau d'abord (petite vérification), copie hors-ligne de LA MÊME page en secours
   - autres fichiers : copie hors-ligne d'abord */
const CACHE = 'tl-L6-v0.8-2026-11-25', FILES = ['./', 'index.html', 'grandtchoumauto6.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('tl-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  if (r.mode === 'navigate') { e.respondWith(fetch(r, { cache: 'no-cache' }).then(res => { if (res.ok) { const k = res.clone(); caches.open(CACHE).then(c => c.put(r, k)); } return res; }).catch(() => caches.match(r, { ignoreSearch: true }).then(h => h || caches.match('index.html')))); return; } // chaque page gardée sous son propre nom (l’app ET le jeu)
  e.respondWith(caches.match(r, { ignoreSearch: true }).then(h => h || fetch(r).catch(() => Response.error())));
});
