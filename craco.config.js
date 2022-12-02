const path = require("path");
module.exports = {
  devServer: {
    port: 3001,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true, //允许跨域
        pathRewrite: { "^/api": "" },
      },
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              symbolId: "icon-[name]",
            },
          },
        ],
        include: [path.resolve("src/assets/icons")],
      });
      // webpackConfig.module.rules[1].oneOf[2].exclude = [
      //   path.resolve("src/assets/icons"),
      // ];
      console.log(webpackConfig.module.rules[3]);
      return webpackConfig;
    },
    alias: {
      "@": path.resolve(__dirname, "src"),
      helpers: path.resolve(__dirname, "src/helpers"),
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      views: path.resolve(__dirname, "src/views"),
      apis: path.resolve(__dirname, "src/apis"),
      constants: path.resolve(__dirname, "src/constants"),
      reducers: path.resolve(__dirname, "src/reducers"),
      hooks: path.resolve(__dirname, "src/hooks"),
      styles: path.resolve(__dirname, "src/styles"),
    },
    extensions: [".jsx", ".json", ".tsx", ".ts", ".js", ".css"],
  },
};
