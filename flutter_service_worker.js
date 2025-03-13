'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c7f72ae5588b0703111247ee12f5d166",
"assets/AssetManifest.bin.json": "3da2cdbabaae9611928c46a4347bcaff",
"assets/AssetManifest.json": "9c849172ecad7560736912762cea5fc1",
"assets/assets/default/image_default_hor.jpg": "c2d45d14d1db39fa2e89133e30556a5d",
"assets/assets/default/image_default_square.jpg": "6ee30ae56462055224c934f371ceb97d",
"assets/assets/default/image_default_ver.jpg": "9d5b8763846d295046c97f9369bc8f01",
"assets/assets/fonts/Merriweather-Regular.ttf": "e2f219e63a575a41e10f991e9c95819a",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/icons/boarding/icon_eye.png": "c0ffe21f95773619a9a31d00165b580f",
"assets/assets/icons/boarding/icon_eye_close.png": "fd53fcd237bd145e944477c7243f05d4",
"assets/assets/icons/boarding/icon_logo.png": "b0940b454358a64b725b430e51f209a2",
"assets/assets/icons/boarding/image_background.png": "f162bcf59a612301ede86e71f0a5e0d6",
"assets/assets/icons/boarding/image_background_blur.png": "ac117b4a70f1e7993b989fa18a904fc8",
"assets/assets/icons/details/icon_backward.png": "dc5d299ff8c7bdec3efed1e63fe5a7c1",
"assets/assets/icons/details/icon_calendar.png": "3b6846dcd5f7aff2454d3aad2e4f1519",
"assets/assets/icons/details/icon_forward.png": "7f30c7b50db0d492c2a17a514376532f",
"assets/assets/icons/details/icon_heart.png": "c5632ae8e07e4d33b17c26e1f43e0171",
"assets/assets/icons/details/icon_heart_fill.png": "3e23c5dce24865cc04bf6a9a68b1ed34",
"assets/assets/icons/details/icon_like.png": "cdc49a0208bc2b9e20f3c1e88f3c9345",
"assets/assets/icons/details/icon_menu.png": "ab272207654aa29919a3d9ec550dfa4a",
"assets/assets/icons/details/icon_navigate_back.png": "482761559ff4a5df02093003ce3b74d9",
"assets/assets/icons/details/icon_navigate_down.png": "fb3247959b5cad02642527e629dac0c0",
"assets/assets/icons/details/icon_navigate_up.png": "acbf6ceb510783c0de6712e824191383",
"assets/assets/icons/details/icon_next.png": "c6afc3806bcff49490389d236171f2ae",
"assets/assets/icons/details/icon_pause.png": "733bb41003bfdbbc9f717cd86f1ca5df",
"assets/assets/icons/details/icon_play.png": "b7a597febab05cc6586c83689eca35a9",
"assets/assets/icons/details/icon_previous.png": "e2ba06829da0c7a89bd6f1d1866f6890",
"assets/assets/icons/icon_dualring.png": "ffe46075622b543966b6fa439d72f542",
"assets/assets/icons/main/category/image_category_logo.png": "2ef9761f1686da244b04dae76cd82ec8",
"assets/assets/icons/main/category/image_category_logo_selected.png": "f7781d7fd966ebd1d9a032c2ed330cb9",
"assets/assets/icons/main/home/home_page/image_background_home.png": "47929d1f659268edc9e06c1d5cba15d9",
"assets/assets/icons/main/icon_categories.png": "5cedcf861a9ae1ba5aa095a3f486aeed",
"assets/assets/icons/main/icon_favourite.png": "55c5c520031610e417a24157faf22662",
"assets/assets/icons/main/icon_home.png": "eb2b092f26eb6a15573162b50292b65d",
"assets/assets/icons/main/icon_search.png": "395e2233c128e924de9b84cf49ae3b0d",
"assets/assets/icons/main/icon_settings.png": "0c130db916c48121d0c69ea41f73a9a9",
"assets/assets/icons/main/search/icon_search_empty.png": "7661e053e2f880eac186a42d67aed047",
"assets/assets/icons/main/settings/icon_logout.png": "f1c92dfd214cc12ae981fdbb60656f74",
"assets/assets/icons/main/settings/image_flag_en.png": "0d7a5f24629c5e7adcc8316f6c6f0431",
"assets/assets/icons/main/settings/image_flag_vi.png": "f46fb881a8f0bf0b2e6ba79b39521b89",
"assets/assets/icons/main/settings/image_logo.png": "b27e7785360fdeab1abc426142a98de2",
"assets/assets/icons/svg/ic_full.svg": "7a6e09079d8002840f6b7a5078c54ee9",
"assets/assets/icons/svg/ic_loop.svg": "fa1b2434735bd3b4b93c06cf5c099130",
"assets/assets/icons/svg/ic_next.svg": "3ff0bface68c0c1cb0cdd86e424f739d",
"assets/assets/icons/svg/ic_pause.svg": "d0691eeb99407a2d1852f0f35a15c85c",
"assets/assets/icons/svg/ic_play.svg": "9834c88415e1cba2eca62a24f0575e60",
"assets/assets/icons/svg/ic_playing.png": "9030908880869f4ad5a5e10f0cc46574",
"assets/assets/icons/svg/ic_playing.svg": "386aad9af0b339ba3579771218cc56eb",
"assets/assets/icons/svg/ic_pre.svg": "ae11d7163c57e27a317698b68e571956",
"assets/assets/icons/svg/ic_shuffle.svg": "3ef9a3cc0dc23d5d6d03b76c6a60b227",
"assets/assets/images/bg_banner_event.png": "13e141372e3f18b284d713e4f4ee86bb",
"assets/FontManifest.json": "368ca52807c784782d0fbab12aa171a4",
"assets/fonts/MaterialIcons-Regular.otf": "b8a5641dbb5aaab97406ef52365f40fa",
"assets/NOTICES": "5fa63bcc7c5120d1d07405fd45212c9b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "704c2b90f549aa181651585e7168f654",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0f278f62366faae72d69d5fd9a958979",
"/": "0f278f62366faae72d69d5fd9a958979",
"main.dart.js": "1e20a3a081c987e07bcfbc3f78617932",
"manifest.json": "70caf0dad35669e503144549662edc42",
"version.json": "54e61ac8448029d9ced59bc292b73487"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
