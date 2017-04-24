const axios = require('axios')

module.exports = {
  // generate: {
  // routes: [
  //   "/resources/AAF-1_01_009",
  //   "/resources/AAF-1_01_007",
  //   "/resources/AAF-1_01_019",
  //   "/resources/AAF-1_01_022",
  //   "/resources/AAF-1_01_018",
  //   "/resources/AAF-1_01_003",
  //   "/resources/AAF-1_01_006",
  //   "/resources/AAF-1_01_010",
  //   "/resources/AAF-1_01_001",
  //   "/resources/AAF-1_01_002",
  //   "/resources/AAF-1_01_008",
  //   "/resources/AAF-1_01_017",
  //   "/resources/AAF-1_01_020",
  //   "/resources/AAF-1_01_015",
  //   "/resources/AAF-2_11",
  //   "/resources/AAF-1_01_021",
  //   "/resources/AAF-1_01_004",
  //   "/resources/AAF-1_01_013",
  //   "/resources/AAF-1_01_016",
  //   "/resources/AAF-1_01_005",
  //   "/resources/AAF-1_01_012",
  //   "/resources/AAF-1_01_014",
  //   "/resources/AAF-1_01_011",
  //   "/resources/AAF-1_02",
  //   "/resources/AAF-1_03",
  //   "/resources/AAF-1_04",
  //   "/resources/AAF-1_05",
  //   "/resources/AAF-1_06",
  //   "/resources/AAF-1_06",
  //   "/resources/AAF-10_01",
  //   "/resources/AAF-10_02",
  //   "/resources/AAF-10_03",
  //   "/resources/AAF-10_04",
  //   "/resources/AAF-10_05",
  //   "/resources/AAF-10_06",
  //   "/resources/AAF-10_07",
  //   "/resources/AAF-10_08",
  //   "/resources/AAF-10_09",
  //   "/resources/AAF-10_10",
  //   "/resources/AAF-10_11",
  //   "/resources/AAF-10_12",
  //   "/resources/AAF-10_13",
  //   "/resources/AAF-10_14",
  //   "/resources/AAF-10_15",
  //   "/resources/AAF-10_16",
  //   "/resources/AAF-10_17",
  //   "/resources/AAF-2_01",
  //   "/resources/AAF-2_02",
  //   "/resources/AAF-2_03",
  //   "/resources/AAF-2_04",
  //   "/resources/AAF-2_05",
  //   "/resources/AAF-2_06",
  //   "/resources/AAF-2_07",
  //   "/resources/AAF-2_08",
  //   "/resources/AAF-2_09",
  //   "/resources/AAF-2_10",
  //   "/resources/AAF-2_12",
  //   "/resources/AAF-2_13",
  //   "/resources/AAF-2_14",
  //   "/resources/AAF-2_15",
  //   "/resources/AAF-2_16",
  //   "/resources/AAF-3_01",
  //   "/resources/AAF-3_02",
  //   "/resources/AAF-3_03",
  //   "/resources/AAF-3_04",
  //   "/resources/AAF-3_05",
  //   "/resources/AAF-3_06",
  //   "/resources/AAF-3_07",
  //   "/resources/AAF-3_08",
  //   "/resources/AAF-3_09",
  //   "/resources/AAF-3_10",
  //   "/resources/AAF-3_11",
  //   "/resources/AAF-3_12",
  //   "/resources/AAF-3_13",
  //   "/resources/AAF-3_14",
  //   "/resources/AAF-3_15",
  //   "/resources/AAF-3_16",
  //   "/resources/AAF-3_17",
  //   "/resources/AAF-3_18",
  //   "/resources/AAF-3_19",
  //   "/resources/AAF-3_20",
  //   "/resources/AAF-3_21",
  //   "/resources/AAF-3_22",
  //   "/resources/AAF-3_23",
  //   "/resources/AAF-3_24",
  //   "/resources/AAF-4_01",
  //   "/resources/AAF-4_02",
  //   "/resources/AAF-4_03",
  //   "/resources/AAF-4_04",
  //   "/resources/AAF-4_05",
  //   "/resources/AAF-4_06",
  //   "/resources/AAF-4_07",
  //   "/resources/AAF-4_08",
  //   "/resources/AAF-4_09",
  //   "/resources/AAF-4_10",
  //   "/resources/AAF-4_11",
  //   "/resources/AAF-4_12",
  //   "/resources/AAF-5_01",
  //   "/resources/AAF-5_02",
  //   "/resources/AAF-5_03",
  //   "/resources/AAF-5_04",
  //   "/resources/AAF-5_05",
  //   "/resources/AAF-5_06",
  //   "/resources/AAF-5_07",
  //   "/resources/AAF-5_08",
  //   "/resources/AAF-5_09",
  //   "/resources/AAF-5_10",
  //   "/resources/AAF-5_11",
  //   "/resources/AAF-5_12",
  //   "/resources/AAF-5_13",
  //   "/resources/AAF-5_14",
  //   "/resources/AAF-5_15",
  //   "/resources/AAF-5_16",
  //   "/resources/AAF-5_17",
  //   "/resources/AAF-5_18",
  //   "/resources/AAF-5_19",
  //   "/resources/AAF-5_20",
  //   "/resources/AAF-5_21",
  //   "/resources/AAF-5_22",
  //   "/resources/AAF-5_23",
  //   "/resources/AAF-5_24",
  //   "/resources/AAF-5_25",
  //   "/resources/AAF-5_26",
  //   "/resources/AAF-5_27",
  //   "/resources/AAF-5_28",
  //   "/resources/AAF-5_29",
  //   "/resources/AAF-5_30",
  //   "/resources/AAF-6_01",
  //   "/resources/AAF-6_02",
  //   "/resources/AAF-6_03",
  //   "/resources/AAF-6_04",
  //   "/resources/AAF-6_05",
  //   "/resources/AAF-6_06",
  //   "/resources/AAF-6_07",
  //   "/resources/AAF-6_08",
  //   "/resources/AAF-6_09",
  //   "/resources/AAF-6_10",
  //   "/resources/AAF-6_11",
  //   "/resources/AAF-6_12",
  //   "/resources/AAF-6_13",
  //   "/resources/AAF-7_01",
  //   "/resources/AAF-7_02",
  //   "/resources/AAF-7_03",
  //   "/resources/AAF-7_04",
  //   "/resources/AAF-7_05",
  //   "/resources/AAF-8_01",
  //   "/resources/AAF-8_02",
  //   "/resources/AAF-8_03",
  //   "/resources/AAF-8_04",
  //   "/resources/AAF-8_05",
  //   "/resources/AAF-8_06",
  //   "/resources/AAF-8_07",
  //   "/resources/AAF-9_01",
  //   "/resources/AAF-9_02",
  //   "/resources/AAF-9_03",
  //   "/resources/AAF-9_04",
  //   "/resources/AAF-9_05",
  //   "/resources/AAF-9_06",
  //   "/resources/AAF-9_07",
  //   "/resources/AAF-9_08",
  //   "/resources/AAF-9_09",
  //   "/resources/AAF-9_10",
  //   "/resources/AAF-9_11",
  //   "/resources/AAF-9_12",
  //   "/resources/AAF-9_13",
  //   "/resources/AAF-9_14"
  // //   ]
  // generate: {
  //   routes () {
  //     return axios.get('https://afwaapi.herokuapp.com/api/v1/resources')
  //     .then((res) => {
  //       return res.data.map((resource) => {
  //         console.log(resource)
  //         if (resource.element) {
  //           return '/resources/' + resource.element
  //         } else {
  //           return '/resources/' + resource.item
  //         }
  //       })
  //     })
  //   }
  // },
  /*
  ** Headers of the page
  */
  cache: true,
  head: {
    title: 'starter',
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
