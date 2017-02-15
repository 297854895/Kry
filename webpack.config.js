var path = require("path");
var webpack = require("webpack");
var precss = require("precss");
var autoprefixer = require("autoprefixer");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        "react-hot-loader/patch",
        "babel-polyfill",
        "whatwg-fetch",
        "webpack-dev-server/client?http://localhost:7777",
        "webpack/hot/only-dev-server",
        "./src/index"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "app.[hash].js"
    },
    devtool: "eval",
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, "src"),
                loader: "babel-loader",
                query: {
                    presets: [
                        [ "es2015", { modules: false } ],
                        "stage-2",
                        "react"
                    ],
                    plugins: [
                        "react-hot-loader/babel",
                        "transform-async-to-generator",
                        "transform-decorators-legacy"
                    ]
                }
            },
            {
              test: /\.less$/,
              use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 2 , modules: true, localIdentName: '[path]___[name]__[local]___[hash:base64:5]'} },
                { loader: 'autoprefixer-loader', options: { browsers: 'last 2 version'} },
                'less-loader'
              ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "file-loader?hash=sha512&digest=hex&name=assets/[hash].[ext]",
                    "image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false"
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ hash: false, template: "./index.hbs" }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/),
        new webpack.LoaderOptionsPlugin({
            test: /\.scss$/,
            debug: true,
            options: {
                postcss: function() {
                    return [ precss, autoprefixer ];
                },
                context: path.join(__dirname, "src"),
                output: { path: path.join(__dirname, "dist") }
            }
        })
    ]
};
