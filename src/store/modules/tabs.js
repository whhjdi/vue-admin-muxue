import {
  routeHasExist,
  getRouteNameFromTabList,
  routeEqual,
  localRead,
  localSave,
  excludeRouteFromTabs,
  getTabListToLocal
} from "@/utils/util";
const state = {
  tabList: JSON.parse(localRead("tabList")) || [
    { name: "Home", meta: { title: "首页" } }
  ]
};
const getters = {};

const mutations = {
  UPDATE_ROUTER(state, route) {
    console.log(route);
    console.log(excludeRouteFromTabs(route));

    if (!routeHasExist(state.tabList, route) && excludeRouteFromTabs(route)) {
      state.tabList.push(route);
    }
    localSave("tabList", JSON.stringify(getTabListToLocal(state.tabList)));
  },
  REMOVE_ROUTE(state, index) {
    state.tabList.splice(index, 1);
    localSave("tabList", JSON.stringify(getTabListToLocal(state.tabList)));
  }
};
const actions = {
  handleRemove({ commit }, { id, $route }) {
    return new Promise(reslove => {
      let route = getRouteNameFromTabList(id);
      let index = state.tabList.findIndex(item => {
        return routeEqual(item, route);
      });
      let len = state.tabList.length;
      let nextRoute = {};
      if (routeEqual($route, state.tabList[index])) {
        if (index < len - 1) {
          nextRoute = state.tabList[index + 1];
        } else nextRoute = state.tabList[index - 1];
      }
      const { name, params, query } = nextRoute || { name: "Home" };

      commit("REMOVE_ROUTE", index);

      reslove({ name, params, query });
    });
  }
};

export default { state, getters, mutations, actions };
