export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fast Fashion',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Explore the impact of fast fashion on the environment and discover sustainable alternatives. Learn about the environmental consequences of rapid trend cycles, textile waste, and resource depletion. Find ethical fashion brands and practical tips to embrace a greener fashion future. Stay updated with the latest sustainable fashion news and be part of the movement towards conscious choices' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'Fast Fashion, Textile Waste' },
      { name: 'author', content: 'Cider Inc.' },
      { property: 'og:image', content: '/bg.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://633e-103-59-75-48.ngrok-free.app/' },
      { name: 'twitter:title', content: 'Fast Fashion' },
      { name: 'twitter:description', content: 'Explore the impact of fast fashion on the environment and discover sustainable alternatives. Learn about the environmental consequences of rapid trend cycles, textile waste, and resource depletion. Find ethical fashion brands and practical tips to embrace a greener fashion future. Stay updated with the latest sustainable fashion news and be part of the movement towards conscious choices' },
      { name: 'twitter:image', content: '/bg.jpg' },

    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
