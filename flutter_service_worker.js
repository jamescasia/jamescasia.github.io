'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/photos/papyrus.png": "e747a3ad95d5ff839b24fc0bdfb546c0",
"assets/assets/photos/android_masters.jpg": "7db91f2ddc7753195a255a57f0417d32",
"assets/assets/photos/iphone_skin.png": "6520bf69801cdae1233d0d523fcee6c7",
"assets/assets/photos/ptf.jpg": "92089d0dd0b55f89cbff4d8324f11273",
"assets/assets/photos/hackit.jpg": "bef2599af77bb2df359d323530d64d34",
"assets/assets/photos/android_masters_2.jpg": "41d8907977c44549ba24aa51aa305b30",
"assets/assets/photos/esc_vel.png": "19066178b56207cbd50a4d07b6bd6fa6",
"assets/assets/photos/picnic_panic.png": "9935628dbf906c7924e26b30d2f38370",
"assets/assets/photos/color_flex.png": "d50ef4b443f3ad5381643c81c691c7ac",
"assets/assets/photos/profile.png": "c15203ecaa69df35ed629b318efb3cb9",
"assets/assets/photos/mentalert.png": "74b322e9c3b4974f5a0befc3b8ac126a",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/LICENSE": "ae471c354859d05208bed1f081969ffd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/AssetManifest.json": "100142e120ac12e53f99382dc9aa060e",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "35de053000961791992af9796a3f3762",
"jamescasia.github.io/assets/assets/photos/papyrus.png": "e747a3ad95d5ff839b24fc0bdfb546c0",
"jamescasia.github.io/assets/assets/photos/android_masters.jpg": "7db91f2ddc7753195a255a57f0417d32",
"jamescasia.github.io/assets/assets/photos/iphone_skin.png": "6520bf69801cdae1233d0d523fcee6c7",
"jamescasia.github.io/assets/assets/photos/ptf.jpg": "92089d0dd0b55f89cbff4d8324f11273",
"jamescasia.github.io/assets/assets/photos/hackit.jpg": "bef2599af77bb2df359d323530d64d34",
"jamescasia.github.io/assets/assets/photos/android_masters_2.jpg": "41d8907977c44549ba24aa51aa305b30",
"jamescasia.github.io/assets/assets/photos/esc_vel.png": "19066178b56207cbd50a4d07b6bd6fa6",
"jamescasia.github.io/assets/assets/photos/picnic_panic.png": "9935628dbf906c7924e26b30d2f38370",
"jamescasia.github.io/assets/assets/photos/color_flex.png": "d50ef4b443f3ad5381643c81c691c7ac",
"jamescasia.github.io/assets/assets/photos/profile.png": "c15203ecaa69df35ed629b318efb3cb9",
"jamescasia.github.io/assets/assets/photos/mentalert.png": "74b322e9c3b4974f5a0befc3b8ac126a",
"jamescasia.github.io/assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"jamescasia.github.io/assets/LICENSE": "6e8db946d8ed7f7f05f25fe3ee46a4ab",
"jamescasia.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"jamescasia.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"jamescasia.github.io/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"jamescasia.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"jamescasia.github.io/assets/AssetManifest.json": "100142e120ac12e53f99382dc9aa060e",
"jamescasia.github.io/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"jamescasia.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"jamescasia.github.io/main.dart.js": "0c02fcc1fc3310ffb02f7f19ab95eb03",
"jamescasia.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"jamescasia.github.io/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"jamescasia.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"jamescasia.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"jamescasia.github.io/.git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
"jamescasia.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"jamescasia.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"jamescasia.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"jamescasia.github.io/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"jamescasia.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"jamescasia.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"jamescasia.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"jamescasia.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"jamescasia.github.io/.git/objects/a3/5ec3c792e5a069c6655fb572d81c6b8d126bdd": "bc4f51e674f7f94d0c9ea81d794a7d75",
"jamescasia.github.io/.git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
"jamescasia.github.io/.git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
"jamescasia.github.io/.git/objects/d9/d23c0642eb60ffd871682ad8bb44b6d9a471c1": "804407ce5ab746da695464f2b93b7fb0",
"jamescasia.github.io/.git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
"jamescasia.github.io/.git/objects/f9/d92af4fa043de3e9a57919682d6bb66af5d611": "5441128d539ee899b04f1ca6a0144e03",
"jamescasia.github.io/.git/objects/f9/600433bf26df202c14934b27b032b7e71a769f": "d10ffb65f50fe3e635f2e5102a2eb534",
"jamescasia.github.io/.git/objects/16/35862eacba651f9fcffca85c2aa70ffd00296b": "a94273950ef7d730b4055ba7c4ac517b",
"jamescasia.github.io/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"jamescasia.github.io/.git/objects/c4/bf33a5af17a603b3093e6a73181ae57e677625": "2ca64d67bcb07db9780b0c9afab39d27",
"jamescasia.github.io/.git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
"jamescasia.github.io/.git/objects/e6/1a7791dafbc9f8901fdc0ecee2abdd691a91d1": "12d2fba0a239e9538e740be90f0223f8",
"jamescasia.github.io/.git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
"jamescasia.github.io/.git/objects/5f/d8536b00790995190d685622d62c10c62e5826": "f49af0b7cc6ca9a1da856e921d6a5b80",
"jamescasia.github.io/.git/objects/47/c1e3557f1d2356fd9c225d2765147394863d51": "557e640c3d39695882e1ecc4ef63cfee",
"jamescasia.github.io/.git/objects/2d/b5df2105e17cc6bab8acb2f8459d4157a3e8a1": "20b76f173946059844da53ef963a0cb1",
"jamescasia.github.io/.git/objects/36/0f07c987bf8fb78d5cda5f9371e47e54e1380b": "047050d1ac558c01b26e9e21e70410e6",
"jamescasia.github.io/.git/objects/78/8066967e31da2a023fcbac98e5a490a9c5d70e": "50f09aa517d7b2847b548b69ab4e0491",
"jamescasia.github.io/.git/objects/1a/412088c0f53029fbe37f83cc035798c155dd75": "f1c06dfa8d91b6fb62ab8fcf4da73677",
"jamescasia.github.io/.git/objects/18/afc4052a2b578ebb42251e3b2ebf59909c97d9": "e8b74aa436208f8a987d9d560ecb412c",
"jamescasia.github.io/.git/objects/ea/ebe6dbe4548ea36e2263e3e6fd3000d9029c27": "9e4cdde54e46256e353193db7c9d6991",
"jamescasia.github.io/.git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
"jamescasia.github.io/.git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
"jamescasia.github.io/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"jamescasia.github.io/.git/objects/2c/846f317565153e66a56547debacbd8aa38bbf3": "526dc203fb98c7362c8af7683851619e",
"jamescasia.github.io/.git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
"jamescasia.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"jamescasia.github.io/.git/objects/69/0e754f8ca0d60b6aea3102f5b842b51a815634": "87be60ec7b106ffae7137822b13a1ca2",
"jamescasia.github.io/.git/objects/b3/54fb6fceae539ae7315837412fa6fd3eac35d7": "4ef219e86ed96da82abd2e0c49c0e65f",
"jamescasia.github.io/.git/objects/4b/6bc235198cd12255a21b1a14d09bccb0570e32": "90774fe6e7c34323288f98ba7c653a4f",
"jamescasia.github.io/.git/objects/9e/ddab89a5c666da6e3b6c83a29466976f641955": "c0e2eb44c7830eaa1dae48099ea7c04b",
"jamescasia.github.io/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"jamescasia.github.io/.git/objects/d1/f7d5ba673c2f0b209bc191034f9cb1a30bbd89": "d01cc3aea743c7f16c5787955ea91229",
"jamescasia.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"jamescasia.github.io/.git/objects/7b/38f80d69b2d2fe8d9b37e7abbc3f074a006ebb": "d51ceca2f8b4bb50bf3aa7d90a6598d7",
"jamescasia.github.io/.git/objects/7b/2a3795324134b60f5355b2cd9351ab1eab229c": "a44e8a2c0b426baf8faee96b6c832f2d",
"jamescasia.github.io/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"jamescasia.github.io/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"jamescasia.github.io/.git/objects/20/03fd8d88f51555535d9fa6a4aea00f214a44a9": "1be841613c4b6242dc3a719c08f0a805",
"jamescasia.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"jamescasia.github.io/.git/objects/03/a3e644835609939f6d51bb5f263f28d6f9175c": "cad90f61fd331848a91204b18029eb39",
"jamescasia.github.io/.git/objects/24/21c09711575fee377ea48a97dd6bd49f7d2707": "0bc389e9fa575f42fa7d69926e961ad9",
"jamescasia.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"jamescasia.github.io/.git/index": "5ab504563aa46b8cd5d8334e29b24a5f",
"jamescasia.github.io/.git/logs/refs/heads/master": "66c6a0f154cf4c5240a7d25f0dfac970",
"jamescasia.github.io/.git/logs/HEAD": "66c6a0f154cf4c5240a7d25f0dfac970",
"jamescasia.github.io/.git/refs/heads/master": "36b0a48a36c84f4ec05a4cedfba92e00",
"jamescasia.github.io/.git/COMMIT_EDITMSG": "c671f41b3748b9d0387f4ee12a90d045",
"jamescasia.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"jamescasia.github.io/.git/config": "5b603c2c0801a9ded3b79159fc38b404",
"jamescasia.github.io/readme.md": "d41d8cd98f00b204e9800998ecf8427e",
"jamescasia.github.io/manifest.json": "0cd4c9d954c3e172e7515a3c1053e4e0",
"jamescasia.github.io/index.html": "06275f754fd0aa60204fc36b4dffed58",
"jamescasia.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"jamescasia.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "0cd4c9d954c3e172e7515a3c1053e4e0",
"index.html": "06275f754fd0aa60204fc36b4dffed58",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
