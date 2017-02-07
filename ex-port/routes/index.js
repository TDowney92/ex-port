var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about */
router.get('/about', function(req, res, next) {
	res.render('about');
});

/* GET contact */
router.get('/contact', function(req, res, next) {
	res.render('contact');
});

/* GET port */
router.get('/port', function(req, res, next) {
	res.render('port');
});

/* GET services */
router.get('/services', function(req, res, next) {
	res.render('services');
});

module.exports = router;
