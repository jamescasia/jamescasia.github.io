'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "593a2c32301588ef0002c2392d0afefb",
"assets/assets/gifs/color-flex.gif": "d49d2c9beb7ea0136130f56b67027587",
"assets/assets/gifs/escape-velocity.gif": "b0ea487ee89f2f16767ba4ce74587569",
"assets/assets/gifs/hakk-taxi.gif": "b91f91704c26083372a078a97296345b",
"assets/assets/gifs/mansana.gif": "05858014cab1a51e1dc59986f3ee9310",
"assets/assets/gifs/mentallerts.gif": "03408d6355420432540113fecffd95c4",
"assets/assets/gifs/papyrus.gif": "80de610a10068bf37b36a9ad79158364",
"assets/assets/gifs/picnic-panic.gif": "b08b47af2a42944f3caea35086bb8e10",
"assets/assets/gifs/plant-app.gif": "e0d45b0098f7ec51478144c3f0fbe1c9",
"assets/assets/gifs/tilted-tables.gif": "d08b01b3921b8d299f2167bd49bae28b",
"assets/assets/photos/3354c243c03274131c04bab681b8ac72.ico.zip": "2ead2baa5beb1291c89e992b43f7d4f1",
"assets/assets/photos/android_masters.jpg": "8fcde829e2e12f321d28a9248d11d32d",
"assets/assets/photos/android_masters_2.jpg": "41d8907977c44549ba24aa51aa305b30",
"assets/assets/photos/azure_hack.png": "2a5a3e1c09aadb7da6b99d6503364a90",
"assets/assets/photos/color_flex.png": "2b582af6a3ab1c8b300ffbf1ea3a76f5",
"assets/assets/photos/denguelytics.png": "54ead363a679e6adceefa99c2f9d64d2",
"assets/assets/photos/esc_vel.png": "469ca19120a2059c922c5299fc10873b",
"assets/assets/photos/hackit.jpg": "caea0feee6a507ec454993d950a1d586",
"assets/assets/photos/hakk-taxi.png": "f59b349360361b981304dd3bd696a19d",
"assets/assets/photos/iphone-skin.png": "b8a1fcfd85ba40a7c98cf4e9a110d8ba",
"assets/assets/photos/iphone_skin.png": "6520bf69801cdae1233d0d523fcee6c7",
"assets/assets/photos/mansana.png": "18619836ee28a0e5547a26ead1d2f7f9",
"assets/assets/photos/mentalert.png": "431932a5c8d963385126b4cb48a1bce6",
"assets/assets/photos/papyrus.png": "aad73ef8cc469a4eaf6e962190cf01ab",
"assets/assets/photos/picnic_panic.png": "bbc39bd2ecb91cbb3aad462bd5e5ab98",
"assets/assets/photos/plant-app.png": "5f027188e41212fa9745272636a40e9a",
"assets/assets/photos/profile.png": "1b4602172d83b3385dc9a654f8462021",
"assets/assets/photos/ptf.jpg": "b2778f5e761bd8df27c3fd43239e6aa1",
"assets/assets/photos/smart-ctv.png": "c802ce081844cb8ea6f5ad00e89ad42b",
"assets/assets/photos/tilted_tables.png": "905d5095e47de2c6591c7ae754e9d7be",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "76af32858d52d030b2c2eeefcd43ba6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "9b923d225a731b01961131d9d7cbd6bb",
"icons/Icon-192.png": "4623bbdb2ea9901ea848432e54600717",
"icons/Icon-512.png": "25e72bc2d25da800a33db2a53ac603de",
"index.html": "8f31184b340279e62df307c878c99b1d",
"/": "8f31184b340279e62df307c878c99b1d",
"main.dart.js": "35ebffdebc4c499b7cbee05875b095de",
"manifest.json": "14e919b7b1dde549ab334b7ee3ce8412",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
