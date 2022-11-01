// import Vue from "vue";
// import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";
//
// Vue.use(Vuetify);
//
// const opts = {};
//
// export default new Vuetify(opts);
//

// import Vue from "vue";
// import Vuetify from "vuetify/lib";
//
// import colors from "vuetify/lib/util/colors";

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1787E0",
        secondary: "#ECF1FB",
        dark: "#000000",
      },
    },
  },
});
