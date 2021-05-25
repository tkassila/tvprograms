"use strict";var precacheConfig=[["/assets/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/assets/icons/android-chrome-192x192.png","59e221032ab061cad83b6ce2bcddbde8"],["/assets/icons/android-chrome-512x512.png","cf3fdf7af60a294d6d3f48cb7ad82488"],["/assets/icons/apple-touch-icon.png","a0e46feb3cc577478b127936e739dd08"],["/assets/icons/favicon-16x16.png","d712b605ed58419c7e6d4ab885d147b7"],["/assets/icons/favicon-32x32.png","2f7ce797cf8f198dedb9a9f38b7ef13b"],["/assets/icons/mstile-150x150.png","ba817517b2c4e1ba1ce802c4d4fafdb4"],["/assets/yleimages/AlfaTV_vtc.png","873d0dd74a4300e7428110ef20396d24"],["/assets/yleimages/Fox_vtc.png","741f6023e1f52504858a4fb8c33ac451"],["/assets/yleimages/Frii_vtc.png","c842473e2b99172ba8c7ed3812826afa"],["/assets/yleimages/Hero_vtc.png","b5a05279830176f21da821a552dce251"],["/assets/yleimages/JIM_vtc.png","eeb61030e44b4d10ac9cd752e132d8dd"],["/assets/yleimages/Kutonen_vtc.png","c24c4d07795aac992f1881c3e9a213a1"],["/assets/yleimages/Liv_vtc.png","43169bc4bb4557c30927cf49020f5c25"],["/assets/yleimages/MTV3_vtc.png","40d92ae25fad5edc586728d03d2080a7"],["/assets/yleimages/National Geographic_vt.png","f11cae1bcc1b37c09d14b8b9d190072e"],["/assets/yleimages/Nelonen_vtc.png","783743f1a711f4a75ea6cf449a27a5aa"],["/assets/yleimages/Sub_vtc.png","37a6d373dcd3f91ab2601752ed385fa7"],["/assets/yleimages/TLC_vtc.png","bb5740a0de290ae2174c18ae8ad491a9"],["/assets/yleimages/TV5_vt.png","7c93349c1b7f9d794b32410383c2d246"],["/assets/yleimages/radio-vega-huvudstadsregionen_vtc.png","d1679147e0ee7178529f5a32033359ea"],["/assets/yleimages/tv-finland_vt.png","74f4cb95bc502f8fc6f31ed230e4b1fd"],["/assets/yleimages/yle-areena_vt.png","bc70011e596def08d495797b78cff2a2"],["/assets/yleimages/yle-klassinen_vtc.png","59963662164ef87963130828cc3d9d48"],["/assets/yleimages/yle-mondo_vtx.png","58b6a2f1c193ad0434863bf922439af1"],["/assets/yleimages/yle-puhe_vtx.png","9c7d5f5fb11a6ce48fda2709cc3b4fb5"],["/assets/yleimages/yle-radio-1_vtc.png","ba993dbd645dcc815bfea3717bbf0823"],["/assets/yleimages/yle-radio-suomi-helsinki_vtc.png","13bd8ce15e5713a33436c63946f51665"],["/assets/yleimages/yle-sami-radio_vtc.png","6742458a69db5e4705d8fcc9f3cf9832"],["/assets/yleimages/yle-teema-fem_vt.png","cd6cacf359c62331f66993735e564788"],["/assets/yleimages/yle-tv1_vtc.png","3b41d47776f9ddfa3105eb4dc3778eac"],["/assets/yleimages/yle-tv2_vtc.png","9beba79dde9873466a88844054674bb5"],["/assets/yleimages/yle-x3m_vtx.png","2d8ab78da2ac4180b734b3af85b234ed"],["/assets/yleimages/ylex_vtx.png","445e8772396034fd2f73b85258ca0440"],["/bundle.05aee.js","446c7a50ae850fe7307e26a105d2446a"],["/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/index.html","ca88ba039afde74f59ceb25c1ae5de48"],["/manifest.json","0e5326c09a3f699455fde3c4b01ad074"],["/route-404.chunk.90874.js","c8c59d4ae7430c5384b5b44755c11679"],["/route-profile.chunk.ff9a5.js","4f540d5e0ddbbab3b6735d772cb0641b"],["/style.aa9c5.css","8f6ebd1ca4b7a91c2e312020f3bd637f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=a),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,s,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(s)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var s=new URL(a).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,a){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],s=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,s,!1);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!a.has(s)){var t=new Request(s,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+s+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(s,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!a.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,"index.html"),a=urlsToCacheKeys.has(s));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(s=new URL("index.html",self.location).toString(),a=urlsToCacheKeys.has(s)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});