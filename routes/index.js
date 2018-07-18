var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gunny Sack' });
});

//GET Login Page
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login - Gunny Sack' });
});


module.exports = router;
