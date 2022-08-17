const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  // devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.[chunkhash:8].js",
    assetModuleFilename: 'imgs/[hash][ext][query]'
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
    new CleanWebpackPlugin(),
  ],
};
