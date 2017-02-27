var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    '/front/*': {
      target: 'http://localhost:3333',
      changeOrigin: true,
      secure: false
    }
  }
}).listen(7777, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:7777/');
});
