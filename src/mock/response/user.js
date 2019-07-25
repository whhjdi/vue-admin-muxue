export const getUserInfo = () => {
  return {
    name: "muxue",
    access: "admin"
  };
};
export const login = () => {
  return {
    code: 200,
    token: "mytoken",
    data: {
      name: "muxue",
      access: "admin"
    }
  };
};
export const authorization = () => {
  return {
    code: 200,
    data: {
      token: "mytoken",
      rules: {
        page: {
          Page: true,
          Home: true,
          Components: true,
          Tree: true,
          Table: true,
          Access: true,
          SplitPane: true,
          MenuPage: true
        },
        components: {}
      }
    }
  };
};
