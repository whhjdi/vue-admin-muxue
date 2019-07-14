import axios from "./index";

export const getUserInfo = () => {
  return axios.request({
    url: "/getUserInfo",
    methods: "post"
  });
};
