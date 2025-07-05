
// basic service worker script for installing only
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
