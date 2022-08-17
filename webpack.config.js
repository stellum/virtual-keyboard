const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js", // entry 속성 = 자바스크립트 파일의 진입점을 나타냄
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  }, // output 속성 = build를 했을 때 bundle파일 관련 속성을 지정해준다.
  devtool: "source-map",
  mode: "development",
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    watchFiles: "index.html",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "keyboard",
      template: "./index.html",
      inject: "body",
      favicon: "./favicon.ico",
    }),
    new MiniCssExtractPlugin({ filename: "style.css" }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};
