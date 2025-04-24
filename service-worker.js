self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("trivia-store").then(cache => {
      return cache.addAll([
        "/trivia_escolar.html",
        "/manifest.json",
        "/icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});