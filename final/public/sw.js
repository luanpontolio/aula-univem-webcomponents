importScripts('workbox-sw.prod.v2.1.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "elements/detail-view.js",
    "revision": "d06962a6965d96aeb7f4307cde152eaf"
  },
  {
    "url": "elements/list-view.js",
    "revision": "0903f41e2ac90805b97a9913cd7d10b3"
  },
  {
    "url": "elements/my-app.js",
    "revision": "2cf97e7af048f0c4455c7f6689ebd66f"
  },
  {
    "url": "favicon.ico",
    "revision": "25ba468ed4ce64ffbd05c18ec78a63a4"
  },
  {
    "url": "index.html",
    "revision": "f6ccd5c968effadf0e62c7ff2db59e58"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js",
    "revision": "a5043c1d0dd16d84558ee6cc2276212e"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/entrypoints/custom-elements-es5-adapter-index.js",
    "revision": "5652c8f83533d62943792a7fe7a2e581"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-hi-ce-index.js",
    "revision": "56dcb9084323a7420add7f765f559f0d"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-hi-index.js",
    "revision": "20258d28d099929fd43753dea73fcfea"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-hi-sd-ce-index.js",
    "revision": "5a0074c0394ddfa03bcee40a45a80c3a"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-hi-sd-ce-pf-index.js",
    "revision": "b488b9aa86388097174eb98e96e40caf"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-sd-ce-index.js",
    "revision": "1a116c5fc36ef135a4a50bc293ef1e66"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/externs/webcomponents.js",
    "revision": "e6cfb19207c09d4eb5f523014e068b61"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/gulpfile.js",
    "revision": "0366da1f0f7858c9af2daa3ef7d950ea"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/src/post-polyfill.js",
    "revision": "c3513735d4f625e90742b012e0a2dfa7"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/src/pre-polyfill.js",
    "revision": "edc8d3181ec649265b25e26c42770260"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/src/promise.js",
    "revision": "078a492979289058946160e520dd7e87"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/src/unresolved.js",
    "revision": "3e24cc1926850e44ffc84404d1e8f69a"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/webcomponents-hi-ce.js",
    "revision": "fbaa6751e3b07a33a459ebbbd24a4ede"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/webcomponents-hi-sd-ce.js",
    "revision": "f06beb1fba0a9020e116162370e3ef16"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/webcomponents-hi.js",
    "revision": "487ac7582563f4797e9e3659a096a642"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/webcomponents-lite.js",
    "revision": "b591b76678e2f5d584eff169fd0ff2f8"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
    "revision": "f13bbbbf647b7922575a7894367ddaaf"
  },
  {
    "url": "node_modules/@webcomponents/webcomponentsjs/webcomponents-sd-ce.js",
    "revision": "e229eae539aba7a4d2400316e6603b0d"
  },
  {
    "url": "style.css",
    "revision": "34c0d4a4b8ca2da6f6a03a73ed6b2672"
  },
  {
    "url": "workbox-sw.prod.v2.1.0.js",
    "revision": "e5f207838d7fd9c81835d5705a73cfa2"
  },
  {
    "url": "yarn.lock",
    "revision": "e08497a6b7b9c81a8a584c25a83b6f7d"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");workboxSW.router.registerRoute('/data/*', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute(/^https:\/\/webcomponents-ffb5e\.firebaseapp\.com\/images\//, workboxSW.strategies.cacheFirst({
  "cacheableResponse": {
    "statuses": [
      0,
      200
    ]
  }
}), 'GET');
