module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.{js,ico,html,css,lock}"
  ],
  "swDest": "public/sw.js",
  "globIgnores": [
    "../workbox-cli-config.js"
  ],

  "skipWaiting": true,
  "clientsClaim": true,

  "navigateFallback": "index.html",

  "runtimeCaching": [
    {
      "urlPattern": "/data/*",
      "handler": "networkFirst"
    },

    {
      "urlPattern": /^https:\/\/webcomponents-ffb5e\.firebaseapp\.com\/images\//,
      "handler": "cacheFirst",
      "options": {
        "cacheName": "images",
        "cacheExpiration": { maxEntries: 20 },
        "cacheableResponse": {
          "statuses": [0, 200]
        }
      },
    }
  ]
};
