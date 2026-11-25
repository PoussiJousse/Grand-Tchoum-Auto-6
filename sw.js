/* TrioLingo service worker · L4 v0.5 · 2026-11-25 : garde l'app hors-ligne. Ne contacte AUCUN autre site.
   - installation : fichiers téléchargés à neuf (cache:"reload"), jamais une vieille copie
   - page de l'app : réseau d'abord (petite vérification), copie hors-ligne en secours
   - autres fichiers : copie hors-ligne d'abord */
const CACHE = 'tl-L4-v0.5-2026-11-25', FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('tl-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  if (r.mode === 'navigate') { e.respondWith(fetch(r, { cache: 'no-cache' }).then(res => { if (res.ok) { const k = res.clone(); caches.open(CACHE).then(c => c.put('index.html', k)); } return res; }).catch(() => caches.match('index.html'))); return; }
  e.respondWith(caches.match(r, { ignoreSearch: true }).then(h => h || fetch(r).catch(() => Response.error())));
});
