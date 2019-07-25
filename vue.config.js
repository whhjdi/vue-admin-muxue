const path = require("path");
const resolve = dir => path.join(__dirname, dir);

const publicPath =
  process.env.NODE_ENV === "production" ? "/vue-admin-muxue/dist" : "/";

module.exports = {
  publicPath,
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  productionSourceMap: false,
  devServer: {
    proxy: "http://localhost:9527"
  }
};
