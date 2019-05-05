importScripts('/blog-nuxtjs-graphcms/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/blog-nuxtjs-graphcms/_nuxt/0358499ab65f79a07a22.js",
    "revision": "a1521b744ac21677f449772a48c1e25f"
  },
  {
    "url": "/blog-nuxtjs-graphcms/_nuxt/310be004c43cc77751ca.js",
    "revision": "a85ebf363044f2e21274f2355663036b"
  },
  {
    "url": "/blog-nuxtjs-graphcms/_nuxt/444eaf68ed24217bf63a.js",
    "revision": "1b6fcbb06a2a1744053211561a371b66"
  },
  {
    "url": "/blog-nuxtjs-graphcms/_nuxt/53266be9cbbf331101f4.js",
    "revision": "62cc23a4217e92d87f1d099a6df50f71"
  },
  {
    "url": "/blog-nuxtjs-graphcms/_nuxt/69ce3882af77d2939780.js",
    "revision": "06dab351d3e5c811dc71f5bf322178c9"
  },
  {
    "url": "/blog-nuxtjs-graphcms/_nuxt/83c75e1815b1d9cacf25.js",
    "revision": "71107ea0549cb5b4393f0f9365980f40"
  },
  {
    "url": "/blog-nuxtjs-graphcms/_nuxt/8c0aac51c14f993ae171.js",
    "revision": "dc9585246d3fc0ad6ec4796c335c0d20"
  },
  {
    "url": "/blog-nuxtjs-graphcms/_nuxt/f93bc8d68cd811415935.js",
    "revision": "f65947cb8d719bab1e8b83ac6790e42a"
  }
], {
  "cacheId": "blog",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/blog-nuxtjs-graphcms/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/blog-nuxtjs-graphcms/.*'), workbox.strategies.networkFirst({}), 'GET')
