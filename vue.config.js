const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  chainWebpack(config) {},
  css: {
    loaderOptions: {
      css: {},
      scss:{}
    },
  },
  transpileDependencies: true,
});
