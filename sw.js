/**
|--------------------------------------------------
| importScripts() If we want to import some scripts
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| Setting assets, static cache & dynamic cache
|--------------------------------------------------
*/
const static = "static_v19";
const dynamic = "dynamic_v19";
const assets = [
  "/index.html",
  "/404.html",
  "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "/js/app.js",
  "/js/materialize.js",
  "/images/logo.svg"
];

/**
|--------------------------------------------------
| Install
|--------------------------------------------------
*/
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(static).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

/**
|--------------------------------------------------
| Activate
|--------------------------------------------------
*/
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

/**
|--------------------------------------------------
| Fetch,
| We can use here indexedDB
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| Create a seperate file for indexedDB,
| called idb and import it with the importScrypt to the service worker
|
| const dbPromise = idb.open("posts-store", 1, (db) => {
|  if (!db.objectStoreNames.contains("posts")) {
|    db.createObjectStore("posts", { keyPath: "id" });
|  }
| });
|--------------------------------------------------
*/

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

/**
|--------------------------------------------------
| Sync Manager
| first check sync browser and store data to indexedDB
|--------------------------------------------------
*/
self.addEventListener("sync", (event) => {
  console.log("background syncing", event);
  if (event.tag === "sync-new-contact") {
    console.log("Syncing new contact");
    event
      .waitUntil
      //0. readAlldata(sync-contact) from indexedDB
      //1. then send the data like in new contact.js
      //2. loop all data pieces, maybe the user tried to add multiple data wit for of or foreach, whatever
      //3. remove all data in the indexedDB
      ();
  }
});

/**
|--------------------------------------------------
| Push Notification click
|--------------------------------------------------
*/

self.addEventListener("notificationclick", (event) => {
  const notification = event.notification;
  const action = event.action;
  console.log(notification);

  if (action === "confirm") {
    console.log("Confirm was chosen");
    notification.close();
  } else {
    console.log(action);
  }
});

self.addEventListener("notificationclose", (event) => {
  console.log("notification was closed");
});

/**
|--------------------------------------------------
| Push Notification
|--------------------------------------------------
*/

self.addEventListener("push", (event) => {
  console.log("push notification received");

  let data = { title: "New £", content: "blablabla" };
  if (event.data) {
    data = JSON.parse(event.data.text());
  }

  const options = {
    body: data.content,
    icon: "/images/icons/icon-96x96.png",
    badge: "/images/icons/icon-96x96.png"
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});
