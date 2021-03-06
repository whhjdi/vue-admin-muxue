import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@/assets/fonts/iconfont.js";
import "./plugins/iview.js";
if (process.env.NODE_ENV !== "production") require("./mock");
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
