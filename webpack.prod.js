const path = require("path");
const glob = require("glob");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const optimizeCss = require("optimize-css-assets-webpack-plugin");
const terser = require("terser-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "src")
};

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: ""
  },
  optimization: {
    minimizer: [new optimizeCss(), new terser()]
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-lazy", ":src"]
          }
        }
      },

      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, "css-loader"]
      },

      {
        test: /\.scss$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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

      /*  { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }, */

      {
        test: /\.(svg|png|jpeg|jpg|gif|webp)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "img"
          }
        }
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
      template: "./src/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ]
};

//new PurgecssPlugin({
//  paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
//})
