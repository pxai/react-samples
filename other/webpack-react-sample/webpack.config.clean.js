const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPluglin = require("clean-webpack-plugin");

const vendors = ["react", "react-dom"];

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src/index.js'),
    vendor: vendors
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html"
    }),
    new CleanWebpackPluglin({options: "build/*.*"})
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
        },
      },
    },
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}


