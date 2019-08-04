const path = require("path");
const glob = require("glob");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const optimizeCss = require("optimize-css-assets-webpack-plugin");
const terser = require("terser-webpack-plugin");
const WebpackBar = require("webpackbar");
const CompressionPlugin = require("compression-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
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
            attrs: [":data-lazy", ":src", ":href"]
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
        test: /\.(svg|png|jpeg|jpg|ico|webp)$/,
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
    new WebpackBar({}),
    new CompressionPlugin({
      algorithm: "gzip"
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/images/icons/icon-512x512.png",
      // The prefix for all image files (might be a folder or a name)
      prefix: "icons/",
      // Emit all stats of the generated icons
      persistentCache: true,
      // Inject the html into the html-webpack-plugin
      inject: true,
      background: "#fff",
      title: "PWA Camera",
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: true,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true
      }
    }),
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
