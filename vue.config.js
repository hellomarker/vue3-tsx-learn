const { defineConfig } = require("@vue/cli-service");
// defineConfig 是更好的
module.exports = defineConfig({
  chainWebpack(config) {},
  css: {
    loaderOptions: {
      css: {},
      scss: {
        
      },
    },
  },
  /**
   * 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖。
   * 不过，对所有的依赖都进行转译可能会降低构建速度。如果对构建性能有所顾虑，你可以只转译部分特定的依赖：给本选项传一个数组，列出需要转译的第三方包包名或正则表达式即可。
   */
  transpileDependencies: true,
});
