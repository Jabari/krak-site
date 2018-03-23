module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'krak - Ignite your day!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Delicious high protein snacks for healthy, active people.' },
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/@ajusa/lit@1.0.0/dist/lit.css'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ffaa00' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
