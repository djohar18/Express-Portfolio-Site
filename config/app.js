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

//database setup
let mongoose = require('mongoose');
let DB = require('./db') 

//modules for authentication
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');

//passport config
require("../config/passport")(passport);

//point mongoose to the DB URI
mongoose.connect(DB.URI, {useNewUrlParser : true, useUnifiedTopology : true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error : '));
mongoDB.once('open', () => {
  console.log('Connected to MongoDB...')
})

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

//authentication setup
app.use(session({
  secret : "secretKey",
  saveUninitialized: false,
  resave: false
}));

//initialize flash
app.use(flash());

//initializepassport
app.use(passport.initialize());
app.use(passport.session());

//route for index.js
let indexRouter = require('../routes/index');
let contactListRouter = require('../routes/contactlist');
let authenticationRouter = require('../routes/authentication');

app.use('/', indexRouter);
app.use('/contact-list', contactListRouter);
app.use('/login', authenticationRouter);

// passport.use(localStrategy, authenticate)

//passport user configuration
let userModel = require('../models/users');
let user = userModel.user;


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
