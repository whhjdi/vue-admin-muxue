const state = {
  tabList: []
};
const getters = {};
const mutations = {
  UPDATE_ROUTER(state, route) {
    if (
      !state.tabList.find(item => {
        return item.name === route.name;
      })
    ) {
      state.tabList.push(route);
    }
  }
};
const actions = {};

export default { state, getters, mutations, actions };
