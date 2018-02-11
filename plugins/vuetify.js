import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.deepPurple.darken2,
    accent: colors.amber.lighten2,
    secondary: colors.deepPurple.lighten4,
    info: colors.teal.lighten1,
    warning: colors.amber,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
