'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d356010120c635879523b18d05bcefaa",
".git/config": "bfdf71ccc8e8a0a66ada3ba1c3a2470a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1f6916e5ef8cad458078523a952120f5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17b5269ed3b4a5dc1f743478a57e7f51",
".git/logs/refs/heads/master": "17b5269ed3b4a5dc1f743478a57e7f51",
".git/logs/refs/remotes/origin/master": "2b2876dbb1b6d9f0a4eb37593a0568ac",
".git/objects/01/40ad5dbf2ddf12e41f5b89bb40c4c396394da5": "ae1bba061bda99a3235a0a50f5982ef5",
".git/objects/12/c851d65e19fb32908f078aabbde7be87d02737": "a3bac1764bea1c784fe18676a49d5f11",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2f/106c31e477e03df8d9cdacecfc487dfe1f36f8": "6e1b789e1229f30c8c854ab493080896",
".git/objects/35/c749c316af7762b842e3b5b6b46639640e246d": "ef1ba42e9537d2eed63adb20b187c44e",
".git/objects/39/54c822d75ee841510844fa8e2f00c5a707176e": "c36467b816cb2217b4e1ac64030865e8",
".git/objects/3e/3eca354be0f6ca686dcdf15e2a136c540c33a2": "df66f2e9c7e07bf967dcbf0854989c06",
".git/objects/42/8ad9524b75de9ae7d80840d88c5e503b48db44": "168a66989196841f87ada730cae5f137",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/c7818f85701d3b35a421440946a0b1bb4d1fa1": "55fb7205f29d761e06f72e42306f65f3",
".git/objects/57/ebfba712cafa710fa5d36c6508f7272f16e435": "48c02d648b00f1b7efa73f3d96bc3044",
".git/objects/63/b6dd96455e4b9a4414a6acf31c2f030fda4fbd": "806f65c743bcc82821c7814be6cff00d",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/75/c2d811f2b1dd12e195d0abfb88622414329330": "033de8194ceae51baa353042242b0476",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/b35cb4ee9f62eb398344be6d1a02bae8be631f": "fd7b83bf87a9e00b8376976a3c89191d",
".git/objects/a0/8b26252f9622f0004476f61558e25ce731194d": "ab9f51de834628acaebbde634e02034a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/ca38289b3ca2cda3afe41571e7e121a0724b68": "217418fac7387f5a5f3233b59bc19cfc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/acf6e492b4c393885bacd1d28ef6bbcdfffec1": "bd85a3ccc920f1a21029d02933936b71",
".git/objects/c8/c1c0c1f47de38ece3437dbef0f17a0e7bc9514": "9db24be6fbf4fe10a6bbd47cc913fa1c",
".git/objects/cb/b362783c1a3290eebbdc2e81005d0fefcf34d4": "8bb75a70c512cd811537223cafec2bd6",
".git/objects/cc/6c6a2e44e31d49213b47584f7bd0d1e947793c": "333ff7af815d2f8bb54bade4b1a7a77c",
".git/objects/d4/32d6edaea462eb89dd51c7df369bc76ed9c5f3": "bb52ee5680219cf3befc160d0a9e5779",
".git/objects/e3/27234318042bd5e2948be44cb563e6e3d8daf3": "026fdc62b66e3053644f16d1da7154e6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/dbdeb52d28bab9078b7cf5ed6f5a2d413cc276": "fe459acba332a5535bb122d95a89d5a1",
".git/objects/ea/2536399e53194c0c6a09fda44fcdd7c21e08d5": "56e36dd1f8a7136dcc0fbe41fcbe7d8e",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/a29dd54146fe6e97ef4f884a8f05b176a638b5": "c556d81c90bb523a9d4ed6494ff1c24b",
".git/objects/f6/7679b166655d1f6e0207a89b4e0b59688d33c9": "da5af38258abe77df47177230498aa8b",
".git/refs/heads/master": "b9369b95efbf16e10562953f6f05977a",
".git/refs/remotes/origin/master": "b9369b95efbf16e10562953f6f05977a",
"assets/AssetManifest.json": "3650708c99cd59d92021ff4d4eb538c7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/%25C4%25B0stanbul.jpg": "39e820baba57cca7acc6945df1e3bc6b",
"assets/images/%25C4%25B0zmir.jpg": "a420df526675dd4ac4543598756fa2fa",
"assets/images/Anasayfa.jpg": "51144d488dc95e83d14bcfbfb44022e1",
"assets/images/Ankara.jpg": "5ec7f8dafd8fc1bf8a44cd6665041985",
"assets/images/kizkulesi.jpg": "6e106ae6a162bdf09d2988d9151ca68a",
"assets/images/Konya.jpg": "185635a75cfcd6fc840f07fc3b3a52e2",
"assets/images/Newyork.jpg": "b6bc7851ef9f8b8f5c56166b9969edcf",
"assets/images/Paris.jpg": "d9d59fe80b6a845192906deb74e59a15",
"assets/images/Pekin.jpg": "af5acbe5a21220903201e766cc95ae00",
"assets/images/Roma.jpg": "0e4f6ceec9ab7031bb25fcd440c18e11",
"assets/images/Samsun.jpg": "4e01e47baf6e320034a2df56020ba448",
"assets/images/suitcase.png": "044843aeb04d56c183c9e59152340788",
"assets/images/Venedik.jpg": "45c5dbbebb802c876449351b647b7cf7",
"assets/NOTICES": "857070541743df1e65943aa841a2376a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "59781fe155cef2e74e68efb165d9c021",
"/": "59781fe155cef2e74e68efb165d9c021",
"main.dart.js": "e91e8cdcb608b03dc0a5b37351afa9ed",
"manifest.json": "db6e48945b551444e35a1ae46ee050cc",
"version.json": "78e054c3a61cb33724b9e024ff6e8bd1"
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
