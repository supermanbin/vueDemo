module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  // DEV 相关
  devServer: {
    host: "localhost",
    port: "1024",
  },
  configureWebpack: {
    devtool: "source-map",
  },
};
