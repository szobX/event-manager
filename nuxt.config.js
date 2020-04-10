export default {
  mode: 'universal',

  /*



   ** Headers of the page



   */

  head: {
    title: process.env.npm_package_name || '',

    meta: [
      { charset: 'utf-8' },

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',

        name: 'description',

        content: process.env.npm_package_description || ''
      }
    ],

    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*



   ** Customize the progress-bar color



   */

  loading: { color: '#fff' },

  /*



   ** Global CSS



   */

  css: ['@/assets/scss/main.scss', 'node_modules/swiper/css/swiper.css'],

  styleResources: {
    scss: '@/assets/scss/_variables.scss'
  },

  /*



   ** Plugins to load before mounting the App



   */

  plugins: [],

  /*



   ** Nuxt.js dev-modules



   */

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module

    '@nuxtjs/eslint-module',
    '@nuxtjs/moment'
  ],

  /*



   ** Nuxt.js modules



   */

  modules: [
    // Doc: https://buefy.github.io/#/documentation

    'nuxt-buefy',

    '@nuxtjs/style-resources',

    // Doc: https://axios.nuxtjs.org/usage

    '@nuxtjs/axios'
  ],

  /*



   ** Axios module configuration



   ** See https://axios.nuxtjs.org/options



   */

  axios: {},

  /*



   ** Build configuration



   */

  build: {
    /*



     ** You can extend webpack config here



     */

    extend(config, ctx) {}
  }
}
