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
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    indexEn: "./src/js/en/index.js",
    aboutEn: "./src/js/en/about.js",
    productsEn: "./src/js/en/products.js",
    contactEn: "./src/js/en/contact.js",
    errorEn: "./src/js/en/error.js"
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader-srcset",
          options: {
            attrs: [":data-lazy", ":srcset", ":source", ":src", ":href"],
            removeComments: true
          }
        }
      },

      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },

      {
        test: /\.scss$/,
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
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
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts"
            }
          }
        ]
      },

      {
        test: /\.(svg|png|jpe?g|webp|ico)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    }),
    new webpack.HotModuleReplacementPlugin(),

    /**
    |--------------------------------------------------
    | Create the pages in english
    |--------------------------------------------------
    */

    new htmlWebpackPlugin({
      title: "index",
      filename: "index.html",
      template: "./src/pages/en/index.html",
      chunks: ["indexEn"]
    }),
    new htmlWebpackPlugin({
      title: "about",
      filename: "en/about/",
      template: "./src/pages/en/about.html",
      chunks: ["aboutEn"]
    }),
    new htmlWebpackPlugin({
      title: "about",
      filename: "en/products/",
      template: "./src/pages/en/products.html",
      chunks: ["productsEn"]
    }),
    new htmlWebpackPlugin({
      title: "about",
      filename: "en/contact/",
      template: "./src/pages/en/contact.html",
      chunks: ["contactEn"]
    }),
    new htmlWebpackPlugin({
      title: "about",
      filename: "en/error/",
      template: "./src/pages/en/error.html",
      chunks: ["errorEn"]
    })
  ]
};

//new PurgecssPlugin({
//  paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
//})
