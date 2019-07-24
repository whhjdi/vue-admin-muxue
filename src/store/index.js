import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import user from "./modules/user";
import router from "./modules/router";
// import { saveToLocal } from "@/plugins/saveToLocal";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,
  state,
  getters,
  mutations,
  actions,
  modules: { user, router }
  // plugins: [saveToLocal]
});
