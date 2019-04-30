const webpack = require("webpack");
const path = require("path");

const vendors = ["react","react-dom"];

module.exports = {
    entry: {
        bundle: path.join(__dirname, "src/index.js"),
        vendor: vendors
    },
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "[name].js",
            publicPath: "build/"
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
    devtool: "source-map"
}
