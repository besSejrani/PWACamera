const static = "static_v9";
const dynamic = "dynamic_v9";
const assets = [
  "/index.html",
  "/404.html",
  "/css/styles.css",
  "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "/js/app.js",
  "/js/materialize.js",
  "/images/logo.svg"
];

//install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(static).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

//activate
self.addEventListener("activate", (event) => {
  event.respondWith(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== static && key !== dynamic) {
            console.log("service worker wants to delete old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

//fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((cacheRes) => {
        return (
          cacheRes ||
          fetch(event.request).then((fetchRes) => {
            return caches.open(dynamic).then((cache) => {
              cache.put(event.request.url, fetchRes.clone());
              return fetchRes;
            });
          })
        );
      })
      .catch(() => {
        return caches.match("/404.html");
      })
  );
});
