//webpack.prod.js
const { merge } = require("webpack-merge");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const common = require("./webpack.common");

const config = {
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    }),
  ],
  optimization: {
    //Chunk
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      //node_modules내의 파일을 chunk 분리
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "venders",
          chunks: "all",
        },
      },
    },
    minimize: true, // js압축
    minimizer: [new TerserWebpackPlugin({})],
  },
  mode: "production",
};

module.exports = merge(common, config);
