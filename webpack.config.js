const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const  MiniCssExtractPlugin = require("mini-css-extract-plugin");
const  CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    entry: "./index.js",
    //  индекс в сжатом виде (нужно перезапустить npx webpack) mode: "production",
    mode: isProduction ? "production" : "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {test: /\.css$/, use: [MiniCssExtractPlugin.loader,"css-loader"]},
            {
                test: /\.(png|svg|gpg|jpg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            // patterns: [{from: 'static', to: 'static'}],
            patterns: [
                {
                    from: path.resolve(__dirname, "./static"),
                    to: path.resolve(__dirname, "./static"),
                    noErrorOnMissing: true,
                }
            ],
            
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'game_page.html',
            template: './game_page.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    optimization:{
        minimizer:["...", new CssMinimizerPlugin()],
    },
    devtool: isProduction ? "hidden-source-map" : "source-map",
};