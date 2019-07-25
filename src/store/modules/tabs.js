import { routeHasExist } from "@/utils/util";
const state = {
  tabList: []
};
const getters = {};
const mutations = {
  UPDATE_ROUTER(state, route) {
    if (!routeHasExist(state.tabList, route)) {
      state.tabList.push(route);
    }
  }
};
const actions = {};

export default { state, getters, mutations, actions };
