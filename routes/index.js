var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
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
  res.render('index', { title: 'Contact' });
});
module.exports = router;
