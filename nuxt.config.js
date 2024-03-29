export default {
  build: {
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(.js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  generate: {
    dir: 'public',
    fallback: true
  },
  head: {
    bodyAttrs: {
      id: '__nuxt_body'
    },
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Christian Martin\'s Portfolio' }
    ],
    titleTemplate: 'Portfolio | Christian Martin'
  },
  loading: {
    color: 'black'
  },
  modern: 'client',
  server: {
    host: '0.0.0.0'
  },
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  vuetify: {
    defaultAssets: {
      icons: false
    }
  }
}
