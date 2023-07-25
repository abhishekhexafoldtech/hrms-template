import { defineNuxtPlugin } from '#app'; // remove if 'vue3' is recognised and global by default

import {library, config} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { 
  faLinkedin  as fabLinkedin,
  faSquareFacebook as fabSquareFacebook,
  faSquareTwitter as fabSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHouse as fasHouse,
  faCopy as fasCopy,
  faPenToSquare as fasPenToSquare,
  faTrash as fasTrash,
  faSquareCheck as fasSquareCheck
} from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt not worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  fasHouse,
  fabLinkedin,
  fabSquareFacebook,
  fabSquareTwitter,
  fasCopy,
  fasPenToSquare,
  fasTrash,
  fasSquareCheck
)

export default defineNuxtPlugin(({vueApp}) => {
  vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})