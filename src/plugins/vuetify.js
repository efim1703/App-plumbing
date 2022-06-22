import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import themes from './themes';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: themes.light,
          dark: false
        }
      }
});
