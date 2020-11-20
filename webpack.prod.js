const path = require("path");
const glob = require("glob");

const PATHS = {
  src: path.join(__dirname, "src"),
};

const WebpackBar = require("webpackbar");

const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCss = require("optimize-css-assets-webpack-plugin");
const terser = require("terser-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const AppManifestWebpackPlugin = require("webpack-manifest-plugin");
const manifestConfig = {
  // Your source logo
  logo: "./src/images/icons/icon-512x512.png",
  // Output path for icons (icons will be saved to output.path(webpack config) + this key)
  output: "icons//", // default '/'. Can be absolute or relative
  // Generate a cache file with control hashes and
  // don't rebuild the favicons until those hashes change
  persistentCache: true,
  // Inject the html into the html-webpack-plugin. Default true
  inject: true,
  // favicons configuration object. Support all keys of favicons (see https://github.com/haydenbleasel/favicons)
  config: {
    // Your application's name. `string`
    appName: "PWA Camera",
    // Your application's description. `string`
    appDescription: "test",
    // Your (or your developer's) name. `string`
    developerName: null,
    // Your (or your developer's) URL. `string`
    developerURL: null,
    // Background colour for flattened icons. `string`
    background: "#fff",
    // Theme color for browser chrome. `string`
    theme_color: "#1e88e5",
    // Android display: "browser" or "standalone". `string`
    display: "standalone",
    // Android orientation: "portrait" or "landscape". `string`
    orientation: "portrait",
    // Android start application's URL. `string`
    start_url: "/?homescreen=1",
    // Your application's version number. `number`
    version: "1.0",
    icons: {
      // Create Android homescreen icon. `boolean` or `{ offset, background, shadow }`
      android: true,
      // Create Apple touch icons. `boolean` or `{ offset, background }`
      appleIcon: true,
      // Create Apple startup images. `boolean` or `{ offset, background }`
      appleStartup: true,
      coast: {
        // Create Opera Coast icon with offset 25%. `boolean` or `{ offset, background }`
        offset: 25,
      },
      // Create regular favicons. `boolean`
      favicons: false,
      // Create Firefox OS icons. `boolean` or `{ offset, background }`
      firefox: true,
      // Create Windows 8 tile icons. `boolean` or `{ background }`
      windows: true,
      // Create Yandex browser icon. `boolean` or `{ background }`
      yandex: true,
    },
  },
};
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    indexEn: "./src/js/en/index.js",
    aboutEn: "./src/js/en/about.js",
    productsEn: "./src/js/en/products.js",
    contactEn: "./src/js/en/contact.js",
    errorEn: "./src/js/en/error.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  optimization: {
    minimizer: [new terser(), new optimizeCss()],
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader-srcset",
          options: {
            attrs: [":data-lazy", ":srcset", ":source", ":src", ":href"],
          },
        },
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
            presets: ["@babel/preset-env"],
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
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jpe?g|ico|webp)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "img",
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBar({}),

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
    //new AppManifestWebpackPlugin(manifestConfig),
    new miniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),

    /**
    |--------------------------------------------------
    | PRODUCTION
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
      filename: "en/about.html",
      template: "./src/pages/en/about.html",
      chunks: ["aboutEn"],
    }),
    new htmlWebpackPlugin({
      title: "products",
      filename: "en/products.html",
      template: "./src/pages/en/products.html",
      chunks: ["productsEn"],
    }),
    new htmlWebpackPlugin({
      title: "contact",
      filename: "en/contact.html",
      template: "./src/pages/en/contact.html",
      chunks: ["contactEn"],
    }),
    new htmlWebpackPlugin({
      title: "error",
      filename: "en/error.html",
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
