var models  = require('../models');
var express = require('express');
var app = express();
var router = express.Router();
var pg = require('pg');



//GET Register Page
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register - Gunny Sack' });
});

router.post('/process', function(req, res, next) {
  console.log(req.body);
});


module.exports = router;
