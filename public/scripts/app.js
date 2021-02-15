/*
  File Name: app.js
  Student Name : Divyanshu Johar
  Student ID : 301149021
  Date : February 14, 2021
*/

/* Module Dependencies */
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let logger = require('morgan');

//route for index.js
let indexRouter = require('../../routes/index');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
