// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      link:[
        { rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap"},
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons+Round"},
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"},
      ],
      script: [
        { src:"https://kit.fontawesome.com/42d5adcbca.js" },
        { src:"https://api.nepcha.com/js/nepcha-analytics.js" },
        { src:"@/assets/js/core/popper.min.js" },
        { src:"@/assets/js/core/bootstrap.min.js" },
        { src:"@/assets/js/plugins/perfect-scrollbar.min.js" },
        { src:"@/assets/js/plugins/typedjs.js" },
        { src:"@/assets/js/plugins/countup.min.js" },
        { src:"@/assets/js/plugins/rellax.min.js" },
        { src:"@/assets/js/plugins/tilt.min.js" },
        { src:"@/assets/js/plugins/choices.min.js" },
        { src:"@/assets/js/plugins/parallax.min.js" },
        { src:"@/assets/js/plugins/nouislider.min.js" },
        { src:"@/assets/js/plugins/anime.min.js" },
        { src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI" },
        { src:"assets/js/material-kit-pro.min.js?v=3.0.4" }
      ],
    }
  },
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
  ],
  css: [
    // "@/globals/global.css",
    // "@/assets/scss/style.scss",
    // "@/assets/img/apple-icon.png",
    // "@/assets/img/favicon.png",
    // "@/assets/css/nucleo-icons.css",
    // "@/assets/css/nucleo-svg.css",
    "@/assets/css/material-kit-pro.css",
    "@/assets/scss/index.scss",
  ],
  // css: ["@/globals/global.css"],
})
