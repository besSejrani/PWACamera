const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: []
          }
        }
      },

      {
        test: /\.(svg|png|jpe?g|webp|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: "index",
      filename: "index.html",
      template: "./src/index.html"
    })
  ]
};