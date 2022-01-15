//webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const config = {
  mode: "development",
  devServer: {
    open: true, //새창으로열음
    historyApiFallback: {
      rewrites: [{ from: /./, to: "404.html" }],
    }, //라우팅과 관련, 제공하지 않는 라우팅으로 이동하면 예외처리
    port: 3333,
  },
};

module.exports = merge(common, config);
