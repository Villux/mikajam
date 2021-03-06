var compression = require('compression');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();
// compression
app.use(compression());
// custom compression filter
// app.use(compression({
//   filter: function (req, res) {
//     return true;
//   }
// }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'))
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log(err);
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err);
    res.render('error', {
        message: "error with server",
        error: "500"
    });
});


module.exports = app;
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log( server.address().port);
});
