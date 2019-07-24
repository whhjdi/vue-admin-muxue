import { login, authorization } from "@/api/user";
import { setToken } from "@/utils/util";
const state = {
  userName: "muxue",
  rules: {}
};
const getters = {};
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name;
  },
  SET_RULES(state, rules) {
    state.rules = rules;
  }
};
const actions = {
  handleLogin({ userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password })
        .then(res => {
          if (res.status === 200 && res.data.token) {
            setToken(res.data.token);
            resolve(res.data);
          } else {
            reject(new Error("请求错误"));
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  handleAuthorization({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization(token)
        .then(res => {
          if (res.status === 200) {
            setToken(res.data.data.token);
            commit("SET_RULES", res.data.data.rules.components);
            resolve(res.data.data.rules.page);
          } else {
            reject(new Error("请求错误"));
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  logout() {
    setToken("");
  }
};

export default { state, getters, mutations, actions };
