// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-icons",
    "@nuxt/image-edge",
    "@pinia/nuxt",
    "vite-plugin-vue-type-imports/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    domains: ["https://unsplash.com/"],
  },
});
