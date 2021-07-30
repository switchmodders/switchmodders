'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "0f195843e77b161ba2e0f29038909321",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".git/config": "c0e6ec4ecb385834139fe06c4b60490e",
".git/refs/heads/master": "8d1e1b994083d0a9bfa4d15e15faf2f2",
".git/refs/remotes/github/main": "8d1e1b994083d0a9bfa4d15e15faf2f2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-push.sample": "3d302748a010da86349334ba4207aaf1",
".git/hooks/prepare-commit-msg.sample": "2704912f124729df09488475bc585d3c",
".git/hooks/pre-applypatch.sample": "1206378152ad6e20e841813c01f4e5db",
".git/hooks/commit-msg.sample": "48403092026538c5a958a2415fc20f87",
".git/hooks/post-update.sample": "4797b40a580a1634378af37057990856",
".git/hooks/push-to-checkout.sample": "3b5f7106966d2c256d6645370be03105",
".git/hooks/update.sample": "6b28c803cd278257c4b38d06cc7cbac5",
".git/hooks/pre-rebase.sample": "dcac8da349404645f8742b87f85d458d",
".git/hooks/pre-receive.sample": "11059005eef3ee3c70d4c64e10b896b9",
".git/hooks/applypatch-msg.sample": "b115961416fab7d6cec98d244c525fce",
".git/hooks/fsmonitor-watchman.sample": "87fb865a439cd3665df0ec2eb992bc5b",
".git/hooks/pre-commit.sample": "d0e23a1431e4fb96f2de269f8c4d7644",
".git/hooks/pre-merge-commit.sample": "e7c28a62f2cf574ebfdd9aaa1a010ef9",
".git/logs/refs/heads/master": "a410ef8bfdc9fdd338c5c7221446c1af",
".git/logs/refs/remotes/github/main": "4abdc1dbb42aef1247366922a3d1fa9b",
".git/logs/HEAD": "a410ef8bfdc9fdd338c5c7221446c1af",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/f4/db0a225374643094bc24c74fa3e66a728b2cd8": "b8a12f017f9b6fc029b05e93a771f476",
".git/objects/25/d49eae702ffacf4696a99b4ca176a9987801df": "7dcebd17feac1f1a184598ba457efe87",
".git/objects/cc/a2ebf06d5454f531addd4d57d57b181f7d6414": "02d974144575a8eb1a957defc96ce56a",
".git/objects/60/c65b193fc7003f8fe1d69ca751a4cb7dc33ba9": "0aa990d6a4973b0175f8f2edb534aee5",
".git/objects/c1/bc5871db0af8b6e6721b432a9d46450059b139": "1016389d25b7c5ca787cbb19114d3349",
".git/objects/e4/fdf6ab84e791f93b1b5b4e95481ffd5d216e0f": "978c1d10688732de187c64c28c493f3c",
".git/objects/b1/e1119255b241a348bf0df21f82f7ad7849cb36": "0333458a24d2cf532b9adf18acb0d7dc",
".git/objects/43/ba5e3915a1bb4bca8f2b4495ac44d1c797917e": "94f2b82681686cd6f43bbd43dcca42e6",
".git/objects/8c/0039103e26f8505633212ea718ffb40a8da223": "772bd33d725594985bce5a05b4cb6158",
".git/objects/54/492325ee17eb7afbd3634e19817735bd3d56d2": "84455e3bae61ae1325b5da5bdd2cddc5",
".git/objects/ab/1f18e93b0428a104162ebbc974046dfbaac5ca": "e9b8c45970fa377b08bff6a178f7447d",
".git/objects/a9/bfc407c92d276e31ab217fbe72d49c8f284632": "7408173471747b1209d433fdf5f82987",
".git/objects/8f/d0c202f5a09f2ef982ae6748325f631c5b37fb": "053f93bd3e76d43ec101a4a8d3a18807",
".git/objects/48/226728c491bc214f2702ff506ac68eb6bbe425": "405908e5297fa32baf07a49888673611",
".git/objects/6e/abea0cb5829929859bbfa202fb69d3f3e18c2a": "63781da5683442a0c00f1fb9ad7a64b0",
".git/objects/de/b5e543c34e47b08f5762e0fb6d3e7626bcac6d": "a03e0c4624158fe3a98901248fc1be23",
".git/objects/20/56f7583b9f90cae0c3fd7cea8758ff3de74670": "5bbaa268855173462655d2bbcfc0c677",
".git/objects/4d/ed983fa9b8c0f70c83b9d826b1af14900273a6": "c8c7f6378d05647eec47ff5642c69212",
".git/objects/e5/9f421bee97a49d601843ec9de854afe729df49": "b0a6461a7876058736856c474c74ed9f",
".git/objects/13/b93b564a8b629e84eb04d2a81b4ac86c614e49": "fdc96788848b6c9b8621d27f813d036a",
".git/objects/67/7228d41363971d440bb21eeb332b9db9251014": "dad9ddd591c3512a9f39616846e865a0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "3fb49f71ea8f23cbff4cc2991da8805c",
".git/FETCH_HEAD": "0156bd329c8e2b6377672ebe855c8e6b",
"assets/NOTICES": "b9d6efb03229715020eb4dd7e5139dce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"index.html": "26ab8c7ddabeaa7c606f9e9b7e300d49",
"/": "26ab8c7ddabeaa7c606f9e9b7e300d49",
"version.json": "1b12bec9288eb61199663ee15cdc5974",
"springs.html": "e6a0d8d6e9c75e7d26993835e78494bb",
"LICENSE": "738f9afc37551c5a150925dbf0e88daa",
"stems.json": "b6c39d4f302833fd92634c8a54838a23",
"manifest.json": "8c92fb4e2f32131e9ff2185b23dea0c3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
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
