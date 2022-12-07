// https://nuxt.com/docs/api/configuration/nuxt-config
import { HstNuxt } from "@histoire/plugin-nuxt";

export default defineNuxtConfig({
  modules: [
    "nuxt-icons",
    "@nuxt/image-edge",
    "@pinia/nuxt",
    "vite-plugin-vue-type-imports/nuxt",
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
