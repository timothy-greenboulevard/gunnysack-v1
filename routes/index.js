var express = require('express');
var router = express.Router();
var pg = require('pg');

/* GET landing page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gunny Sack' });
});

//GET Login Page
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login - Gunny Sack' });
});

//GET home page
router.get('/home',function(req, res, next){
  res.render('home',{ title: 'Home - Gunny Sack' })
});

//GET DB ***TESTING REMOVE AFTER USE***
router.get('/db',function(req, res, next){
  res.render('dbTest',{ title: 'Testing DB' })
});


module.exports = router;
