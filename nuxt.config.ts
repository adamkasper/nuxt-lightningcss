export default defineNuxtConfig({
  vite: {
    css: {
      transformer: 'lightningcss',
    },
    build: {
      cssMinify: 'lightningcss',
    },
  },

  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },
});
