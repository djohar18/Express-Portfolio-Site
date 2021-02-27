/*
  File Name: index.js
  Student Name : Divyanshu Johar
  Student ID : 301149021
  Date : February 28, 2021
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET mision statement page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

//POST Request on form submit from contact page
router.post("/home", (req, res, next) => {
  console.log("entered");
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;
