import axios from "./index";

export const getUserInfo = ({ id }) => {
  return axios.request({
    url: "/getUserInfo",
    method: "post",
    data: { id }
  });
};
export const login = ({ userName, password }) => {
  return axios.request({
    url: "/login",
    method: "get",
    data: {
      userName,
      password
    }
  });
};

export const authorization = () => {
  return axios.request({
    url: "/authorization",
    method: "get"
  });
};
