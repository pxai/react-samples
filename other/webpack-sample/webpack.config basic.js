const path = require("path");

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
            path: path.resolve(__dirname, "build"),
            filename: "bundle.js",
            publicPath: "build/"
    },
    module: {
        rules: [
            {
                use: [{
                    loader: 'babel-loader'
                }],
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader/url"},
                    {loader:"file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ],
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
}
