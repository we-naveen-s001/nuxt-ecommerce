// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro:{
  routeRules:{
   "/api/**":{
    cors:true
   }
  }
 },
 modules: ['@pinia/nuxt','@nuxtjs/tailwindcss','pinia-plugin-persistedstate/nuxt']
})
