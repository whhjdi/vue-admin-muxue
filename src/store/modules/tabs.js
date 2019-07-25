import {
  routeHasExist,
  getRouteNameFromTabList,
  routeEqual,
  localRead,
  localSave
} from "@/utils/util";
const state = {
  tabList: JSON.parse(localRead("tabList")) || [{ name: "Home" }]
};
const getters = {};

const getTabListToLocal = tabList => {
  return tabList.map(item => {
    return {
      name: item.name,
      path: item.path,
      meta: item.meta,
      query: item.query,
      params: item.params
    };
  });
};
const mutations = {
  UPDATE_ROUTER(state, route) {
    if (!routeHasExist(state.tabList, route)) {
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
