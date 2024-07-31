const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { split, chunk } = require("lodash");

module.exports = {
    mode: "development",
    entry: {
        index: {
            import: "./src/index.js",
        },
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development",
        }),
    ],
};
