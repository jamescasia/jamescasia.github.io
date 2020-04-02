'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/assets/photos/papyrus.png": "e747a3ad95d5ff839b24fc0bdfb546c0",
"/assets/assets/photos/android_masters.jpg": "7db91f2ddc7753195a255a57f0417d32",
"/assets/assets/photos/iphone_skin.png": "6520bf69801cdae1233d0d523fcee6c7",
"/assets/assets/photos/ptf.jpg": "92089d0dd0b55f89cbff4d8324f11273",
"/assets/assets/photos/hackit.jpg": "bef2599af77bb2df359d323530d64d34",
"/assets/assets/photos/android_masters_2.jpg": "41d8907977c44549ba24aa51aa305b30",
"/assets/assets/photos/esc_vel.png": "19066178b56207cbd50a4d07b6bd6fa6",
"/assets/assets/photos/picnic_panic.png": "9935628dbf906c7924e26b30d2f38370",
"/assets/assets/photos/color_flex.png": "d50ef4b443f3ad5381643c81c691c7ac",
"/assets/assets/photos/profile.png": "c15203ecaa69df35ed629b318efb3cb9",
"/assets/assets/photos/mentalert.png": "74b322e9c3b4974f5a0befc3b8ac126a",
"/assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"/assets/LICENSE": "6e8db946d8ed7f7f05f25fe3ee46a4ab",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/AssetManifest.json": "100142e120ac12e53f99382dc9aa060e",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/main.dart.js": "0c02fcc1fc3310ffb02f7f19ab95eb03",
"/manifest.json": "0cd4c9d954c3e172e7515a3c1053e4e0",
"/index.html": "06275f754fd0aa60204fc36b4dffed58",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"
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
