var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var proxy = require('express-http-proxy');

var app = express();

app.set('views', path.join(__dirname, '/dist'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/dist')));


app.get('/', function(req, res, next) {
  res.render('index.ejs');
});

app.use('/api', proxy('http://localhost:3333', {
  forwardPath: function(req, res) {
    return require('url').parse(req.url).path;
  }
}));

app.get('/*', function(req, res, next) {
  res.render('index.ejs');
});

module.exports = app;
