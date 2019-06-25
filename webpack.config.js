const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    globalObject: "this"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: { loader: "worker-loader" }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
