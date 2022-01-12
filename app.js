var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var apiRouter = require('./routes/api');
var passport = require('passport')
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize())
require('./auth/auth')(passport);
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use('/api', apiRouter);

module.exports = app;
