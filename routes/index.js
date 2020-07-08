var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/success_message', function(req, res, next) {
  req.flash('success', 'Success flash message');
  res.redirect('/')
});

router.get('/warning_message', function(req, res, next) {
  req.flash('warning', 'Warning flash message');
  res.redirect('/')
});

router.get('/error_message', function(req, res, next) {  
  req.flash('error', 'Error flash message');
  res.redirect('/')
});

router.get('/multiple_message', function(req, res, next) {
  req.flash('success', 'Success flash message');
  req.flash('warning', 'Warning flash message');
  req.flash('error', 'Error flash message');
  req.flash('success', 'Second success flash message');
  res.redirect('/')
});

module.exports = router;
