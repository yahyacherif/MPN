var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var bodyParser = require("body-parser");
const {Sequelize, DataTypes} = require("sequelize");
var sequelize  = require('./config/db.config')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var partnersRouter = require('./routes/partner');
var User = require('./models/user');
var Partner = require('./models/partner');
var Action = require('./models/action');
var Situation = require('./models/situation');
var Next_step = require('./models/next_step');




require('dotenv').config();
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const corsOptions ={
  origin:'*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use (bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/partners', partnersRouter);

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


sequelize.authenticate()
sequelize.sync()

const port = process.env.PORT || 5000 ;

app.listen(port, ()=>{
  console.log(`Listening on port ${port}...`);
});


module.exports = app;
