//webpack.common.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const isProduction = process.env.NODE_ENV === "PRODUCTION";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[chunkhash].js", //name을 넣어준다.
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.s?css$/, //감지
        oneOf: [
          //여러 rule중 하나가 적용되게
          {
            test: /\.modules\.s?css$/, //module이 파일 이름에 있는지 없는지
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              {
                loader: "css-loader",
                options: {
                  modules: true,
                },
              },
              "sass-loader", //축약형으로 문자열로 넣어도 된다.
            ],
          },
          {
            //첫번째 감지에 걸리지 않으면 실행
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
        ],
      },
      {
        test: /\.hbs$/, //handlebars 설정
        use: ["handlebars-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, //$는 끝을 의미  i는 대소문자를 가리지 않겠다는 의미
        use: [
          {
            loader: "file-loader",
            options: {
              name() {
                if (!isProduction) {
                  return "[path][name].[ext]";
                }
                return "[contenthash].[ext]";
              }, // ext : 확장자
              publicPath: "assets/",
              outputPath: "assets/",
            },
          },
        ],
      },
      {
        test: /.\svg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, //bite크기단위의 숫자(파일크기에 대한 제약)
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack",
      template: "./template.hbs",
      meta: {
        viewport: "width-device-width, initialscale=1",
      },
      minify: isProduction //모드에 따라 html이 압축될수도 안될수도
        ? {
            collapseWhitespace: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
          }
        : false,
    }),
    new CleanWebpackPlugin(), //CleanWebpack
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
    }),
    new webpack.DefinePlugin({
      IS_PRODUCTION: isProduction,
    }),
  ],
};
