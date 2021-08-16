var createError = require("http-errors");
var express = require('express');
var path = require('path');
var cookieParser =require('cookie parser');
var logger = require('logger');

var mongo = require('mongodb');
var monk = require('monk');
var database = monk('localhost:27017/nodetest2');

//Routing
//var indexRouter = require('./index');
//var userRouter = require('./users');
//var app = express();

//setup engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//set the server
app.use(logger('development'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//route to home
//app.use('/',indexRouter);
//app.use('/users',usersRouter);

//Make the Db accessable
app.use(function(req,res,next){
    req.database = database;
    next();
})

//catch the error if the page is not found
app.use(function(req,res,next){
    next(createError(404));
});

//error Handler ----> Response found 
app.use(function(err,req,res,next){
    res.locals.message = err.message;   
    res.locals.error = req.app.get('env') === 'development' ? err : {};

//render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
