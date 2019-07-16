import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import user from "./modules/user";
import { saveToLocal } from "@/plugins/saveToLocal";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NDOE_ENV === "production" ? false : true,
  state,
  getters,
  mutations,
  actions,
  modules: { user },
  plugins: [saveToLocal]
});
