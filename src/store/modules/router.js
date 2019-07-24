import { routes, routesMap } from "@/router/routes";
import { getAccessRoutes } from "@/utils/util";
const state = {
  routers: routes,
  hasRules: false
};
const getters = {};
const mutations = {
  CONCAT_ROUTES(state, list) {
    state.routers = list.concat(routes);
    state.hasRules = true;
  }
};
const actions = {
  concatRoutes({ commit }, rules) {
    return new Promise((resolve, reject) => {
      try {
        let list = [];
        if (
          Object.entries(rules).every(item => {
            return item[1];
          })
        ) {
          list = routesMap;
        } else {
          list = getAccessRoutes(routesMap, rules);
        }
        commit("CONCAT_ROUTES", list);
        resolve(list);
      } catch (err) {
        reject(err);
      }
    });
  }
};

export default { state, getters, mutations, actions };
