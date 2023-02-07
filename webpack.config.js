const path = require("path");
const srcDir = path.resolve(__dirname, "assets/src/");
const distDir = path.resolve(__dirname, "assets/dist/");

/************************************/
/***** WEBPACK CONFIG START ......... */
/************************************/

module.exports = {
  default: {
    entry: {
      script: srcDir + "/js/script.js",
      styles: srcDir + "/scss/styles.scss",
    },
    devtool: "source-map",
    output: {
      filename: "[name].bundle.js",
      path: distDir,
      clean: true,
    },
    // resolve: resolve,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          type: "asset/resource",
          generator: {
            filename: "[name].css",
          },
          use: [
            {
              loader: "postcss-loader",
              options: {
                // sourceMap: true,
                postcssOptions: {
                  plugins: [
                    require("autoprefixer")(/*{ grid: 'autoplace' }*/),
                    require("postcss-pxtorem")({
                      rootValue: 16,
                      unitPrecision: 5,
                      propList: ["*"],
                      selectorBlackList: [],
                      replace: true,
                      mediaQuery: false,
                      minPixelValue: 0,
                    }),
                    require("postcss-flexbugs-fixes"),
                  ],
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                // sourceMap: true
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [new (require("webpack-remove-empty-scripts"))()],
  },
};
/************************************/
/***** WEBPACK CONFIG END ......... */
/************************************/
