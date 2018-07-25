var models  = require('../models');
var express = require('express');
var router = express.Router();
var pg = require('pg');

//Post Login Details
router.post('/login_process', function(req, res, next) {
	console.log("Doing login!")
    console.log(req.body);
  res.render('login_process', { title: 'Login - Gunny Sack' });
});


//GET Login Page
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login - Gunny Sack' });
});



module.exports = router;