import colors from 'vuetify/es5/util/colors'

const endpointDefaults = {
  // withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - pet-shop',
    title: 'pet-shop',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    // Doc: https://auth.nuxtjs.org/guide
    '@nuxtjs/auth-next',
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          'primary-green': '#4EC690',
          'secondary-green': '#EEF5F2',
          'primary-blue': '#1976D2'
        }
      },
    },
    font: {
      family: 'Roboto' 
    },
    icons: {
      iconfont: 'mdiSvg',
    },
  },

  auth: {
    redirect: false,
    strategies: {
      local: {
        token: {
          property: 'data.token',
          global: true,
          type: 'Bearer',
          maxAge: 604800,
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: {
            ...endpointDefaults,
            url: `${process.env.BACKEND_BASE_URL}/user/login`,
            ...{
              'Access-Control-Allow-Credentials': true,
            },
            method: 'post',
            propertyName: 'data.token',
          },
          logout: {
            ...endpointDefaults,
            url: `${process.env.BACKEND_BASE_URL}/user/logout`,
            method: 'get',
          },
          user: {
            ...endpointDefaults,
            url: `${process.env.BACKEND_BASE_URL}/user`,
            method: 'get',
          },
        },
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile:
      [
        'vee-validate/dist/rules',
      ]
  },
}
