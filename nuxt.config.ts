export default defineNuxtConfig({
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  colorMode: {
    preference: 'system'
  },
  modules: [
    '@nuxt/ui',
  ]

  // uri: 'mongodb+srv://balajisrdev:Love_Your_Mom@feeder.gz4bqkm.mongodb.net/?retryWrites=true&w=majority&appName=feeder',
  // Love_Your_Mom
})
