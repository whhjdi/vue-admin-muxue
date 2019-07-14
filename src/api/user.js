import axios from "./index";

export const getUserInfo = ({ id }) => {
  return axios.request({
    url: "/getUserInfo",
    method: "post",
    data: { id }
  });
};
