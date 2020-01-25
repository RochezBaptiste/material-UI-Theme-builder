/* eslint-disable */

// Webpack
const webpack = require("webpack");

// Path
const path = require("path");
const BUILD_DIR = path.resolve(__dirname, "./dist");
const APP_DIR = path.resolve(__dirname, "./src");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {

    return {
        mode: env.environment,
        devtool: "source-map",
        context: APP_DIR,
        entry: ["core-js/fn/promise", "url-search-params-polyfill", "babel-polyfill", "./index.tsx"],
        output: {
            path: BUILD_DIR,
            filename: "js/[name].[hash].js",
        },
        resolve: {
            extensions: [".js", ".ts", ".tsx", ".json"]
        },
        module: {
            rules: [
                {
                    test: /\.jsx?|tsx?$/,
                    options: {
                        configFile: path.resolve("babel.config.js")
                    },
                    loader: "babel-loader",
                    exclude: [
                        /\.json$/
                    ]
                },
                {
                    test: /\.s?css$/,
                    use:  [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                esModule: true,
                            }
                        },
                        'sass-loader'
                    ],
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff",
                        outputPath: "fonts"
                    }
                },
                {
                    test: /\.(svg|gif|png|jpe?g)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img"
                    }
                },
                {
                    test: /\.(ttf|otf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts"
                    }
                },
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                "process.env": {
                    "APP_VERSION":  JSON.stringify(require("./package.json").version)
                }
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "style.css",
                chunkFilename: "[name].css"
            }),
            new HtmlWebpackPlugin({
                    favicon: "./static/img/favicon.jpg",
                    template: "./index.html",
                    hash: true
                }
            ),
        ],
        devServer: {
            host: 'localhost',
            port: 8080,
            historyApiFallback: true,
            overlay: {
                errors: true,
                warnings: true,
            }
        }
    };
};
