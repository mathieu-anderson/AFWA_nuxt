const axios = require('axios')

module.exports = {
  generate: {
    routes () {
      return axios.get('https://afwaapi.herokuapp.com/api/v1/resources')
      .then((res) => {
        return res.data.map((resource) => {
          if (resource.element) {
            return '/resources/' + resource.element
          } else {
            return '/resources/' + resource.item
          }
        })
      })
    }
  },
  /*
  ** Headers of the page
  */
  cache: true,
  head: {
    title: 'AF Wellington Acrhives',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
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
