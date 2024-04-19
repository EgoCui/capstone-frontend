module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "zh-CN",
    },
    title: "Anima",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      {
        hid: "description",
        name: "description",
        content: "description",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "keywords",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  // server: {
  //   port: 3001,
  //   host: '0.0.0.0'
  // },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#FF0000" },
  /*
   ** Global CSS
   */
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-vue/dist/bootstrap-vue.css",
    "~/static/css/animate.css",
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "@/plugins/vue-awesome-swiper", ssr: false },
    "@/plugins/bootstrap-vue",
  ],
  /**
   * 关闭遥感采集
   */
  telemetry: false,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/proxy',
    // Doc: https://bootstrap-vue.js.org
    // 'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  /**
   * 取消预加载
   */
  render: {
    resourceHints: false,
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8090/',
      pathRewrite: {
        "^/api": "",
      },
      secure: false,
      changeOrigin: true,
    }
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    // analyze: true,
    productionSourceMap: false,
    extractCSS: {
      allChunks: true,
    },
  },
};
