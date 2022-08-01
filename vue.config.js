const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  chainWebpack(config) {},
  css: {
    loaderOptions: {
      css: {},
    },
  },
  transpileDependencies: true,
});
