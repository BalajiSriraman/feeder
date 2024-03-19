export default defineNuxtConfig({
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  colorMode: {
    preference: 'system'
  },
  modules: ['@nuxt/ui',]
})
