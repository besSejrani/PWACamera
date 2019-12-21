const path = require("path");
const glob = require("glob");

const PATHS = {
  src: path.join(__dirname, "src")
};

const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

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
    rules: [{
        test: /\.(html)$/,
        use: {
          loader: "html-loader-srcset",
          options: {
            attrs: [":data-lazy", ":srcset", ":source", ":src", ":href"]
          }
        }
      },

      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },

      {
        test: /\.scss$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader", ]
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: []
          }
        }
      },

      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts"
          }
        }]
      },

      {
        test: /\.(svg|png|jpe?g|webp|ico)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: "index",
      filename: "index.html",
      template: "./src/index.html"
    })
  ]
};

//new PurgecssPlugin({
//  paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
//})