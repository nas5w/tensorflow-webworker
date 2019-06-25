const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js"
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
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};
