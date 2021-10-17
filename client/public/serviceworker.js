const CACHE_NAME = "knotes-cache";
const urlsToCache = ["index.html", "offline.html"];

let self = this;

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    )
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(() => {
            return fetch(event.request).catch(() => {
                caches.match("offline.html");
            });
        })
    )
});

self.addEventListener("activate", (event) => {
    const whiteList = [];
    whiteList.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheNames.includes(cacheName)) return caches.delete(cacheName);
            })
        ))
    )
});