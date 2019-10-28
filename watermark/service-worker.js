/**
 * @since 2019-10-27 04:11
 * @author vivaxy
 */
var CACHE_NAME = 'watermark-v1.0.1';

// @see https://davidwalsh.name/service-worker-claim
self.addEventListener('install', function() {
  return self.skipWaiting();
});

// looping through all of the caches in the service worker
// and deleting any caches that aren't defined in the cache whitelist.
self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches
      .keys()
      .then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(function() {
        return self.clients.claim();
      }),
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // IMPORTANT: Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the response.
      var fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(function(response) {
        // Check if we received a valid response
        // Make sure the response type is basic,
        // which indicates that it's a request from our origin.
        // This means that requests to third party assets aren't cached as well.
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // IMPORTANT: Clone the response. A response is a stream
        // and because we want the browser to consume the response
        // as well as the cache consuming the response, we need
        // to clone it so we have two streams.
        var responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    }),
  );
});
