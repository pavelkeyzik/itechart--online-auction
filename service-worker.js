"use strict";var precacheConfig=[["/itechart--online-auction/index.html","33f6b3a40d121be12a0096bf700ff384"],["/itechart--online-auction/static/css/main.4053d4d0.css","301c28808e5412d4208e992188f37476"],["/itechart--online-auction/static/js/main.eefcba36.js","47946f1c555cf05b241fcb66889b26c3"],["/itechart--online-auction/static/media/form.57fbd4d4.scss","57fbd4d4e67fcad79b6bafa87c390436"],["/itechart--online-auction/static/media/index.09dd7094.scss","09dd70948d1949b1bea6dbaeab57eb78"],["/itechart--online-auction/static/media/index.4114d5fe.scss","4114d5fe370792e6e76417cceae6c83d"],["/itechart--online-auction/static/media/index.4493fb4b.scss","4493fb4b657783900ea63221086de951"],["/itechart--online-auction/static/media/index.4abb1e92.scss","4abb1e929536d7823ec65578041cb76f"],["/itechart--online-auction/static/media/index.53ad7625.scss","53ad76251e3ba810dac31de5b37b3496"],["/itechart--online-auction/static/media/index.60243b34.scss","60243b341be0421694bdbd5569dd1dfd"],["/itechart--online-auction/static/media/index.65a4fbb0.scss","65a4fbb098660eb1ee35ce7b720848d2"],["/itechart--online-auction/static/media/index.69695e9a.scss","69695e9ae337241b7571cfe79a038c08"],["/itechart--online-auction/static/media/index.97931b72.scss","97931b72af45d4089fc17427a29caed3"],["/itechart--online-auction/static/media/index.9d659eba.scss","9d659eba347e6d3acfbe4dbd79dc19bb"],["/itechart--online-auction/static/media/index.9e47eae7.scss","9e47eae7af2f6b118d5ab7b4f4951143"],["/itechart--online-auction/static/media/index.a348d62e.scss","a348d62ebec7f4ff6fe872a170e8b96a"],["/itechart--online-auction/static/media/index.a4d242f8.scss","a4d242f835f907fe8cd94ba6020ed3cc"],["/itechart--online-auction/static/media/index.a6b48747.scss","a6b48747631701214a739c92c16db9e2"],["/itechart--online-auction/static/media/index.b6700ad3.scss","b6700ad381ac4359e3573cf1208b3b79"],["/itechart--online-auction/static/media/index.e7c92f66.scss","e7c92f66224e814e85a723f844cb23ee"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var i=new URL(e);return a&&i.pathname.match(a)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),i=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var i="/itechart--online-auction/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});