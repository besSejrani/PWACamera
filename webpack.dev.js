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

const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    indexEn: "./src/js/en/index.ts",
    aboutEn: "./src/js/en/about.ts",
    productsEn: "./src/js/en/products.ts",
    contactEn: "./src/js/en/contact.ts",
    errorEn: "./src/js/en/error.ts",
  },

  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },

  devServer: {
    open: true,
    compress: true,
    port: 8090,
    https: true,
    http2: true,
    hot: true,
    contentBase: path.join(__dirname, 'src'),
    contentBasePublicPath: '/src',
  },

  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader-srcset",
          options: {
            attrs: [":data-lazy", ":srcset", ":source", ":src", ":href"],
            removeComments: true,
          },
        },
      },

      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.json$/,
        use: ["json-loader"],
        type: "javascript/auto",
      },

      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },

      {
        test: /\.scss$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
            plugins: [],
          },
        },
      },

      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts",
              esModule: false,
            },
          },
        ],
      },

      {
        test: /\.(svg|png|jpe?g|webp|ico)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
    new webpack.HotModuleReplacementPlugin(),

    /**
    |--------------------------------------------------
    | DEV
    | 
    | Create english content
    |--------------------------------------------------
    */

    new htmlWebpackPlugin({
      title: "index",
      filename: "index.html",
      template: "./src/pages/en/index.html",
      chunks: ["indexEn"],
    }),
    new htmlWebpackPlugin({
      title: "about",
      filename: "en/about/",
      template: "./src/pages/en/about.html",
      chunks: ["aboutEn"],
    }),
    new htmlWebpackPlugin({
      title: "about",
      filename: "en/products/",
      template: "./src/pages/en/products.html",
      chunks: ["productsEn"],
    }),
    new htmlWebpackPlugin({
      title: "about",
      filename: "en/contact/",
      template: "./src/pages/en/contact.html",
      chunks: ["contactEn"],
    }),
    new htmlWebpackPlugin({
      title: "about",
      filename: "en/error/",
      template: "./src/pages/en/error.html",
      chunks: ["errorEn"],
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};

//new PurgecssPlugin({
//  paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
//})
