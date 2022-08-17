const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  // devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.[chunkhash:8].js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
      watch: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.[chunkhash:8].css",
    }),
  ],
};
