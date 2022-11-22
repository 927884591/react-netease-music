const path = require("path");
module.exports = {
  devServer: {
    port: 3001,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
      },
    },
  },
  webpack: {
    module: true,
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
