var webpack = require('webpack');
var path = require('path');
var prodConfig = {
    entry:  [__dirname + "/src/client.js" ],
    output: {
     path: __dirname + "/dist",
     filename: "bundle.js",
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.less$/,
          loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[path]___[name]__[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!less?outputStyle=expanded&sourceMap'
        },
        {
          test: /\.json$/,
          loader: "json"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
        },
        {
          test: /\.png$/,
          loader: "url-loader?limit=10240"
        },
        {
          test: /\.jpg$/,
          loader: "url-loader?limit=10240"
        }
      ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          },
          output: {
            comments: false,
          },
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
    ]
};
module.exports = prodConfig;
