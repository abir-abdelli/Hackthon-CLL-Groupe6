var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var membersRouter = require('./routes/members');
var usersRouter = require('./routes/users');
var meetingsRouter = require('./routes/meetings');
var materialsRouter = require('./routes/materials');
var keysRouter = require('./routes/keys');
var loginRouter = require('./routes/signin');
var signUpRouter = require('./routes/sign-up');
var home = require('./routes/inex');
var bookingMat = require('./routes/book');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/keys', bookingMat);
app.use('/book', );
app.use('/', loginRouter);
app.use('/home', home);
app.use('/sign-up', signUpRouter);
app.use('/meetings', meetingsRouter);
app.use('/materials', materialsRouter);
app.use('/members', membersRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
