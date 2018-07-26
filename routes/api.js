var models  = require('../models');
var express = require('express');
var router = express.Router();
var pg = require('pg');

//Post Login Details
router.post('/login', function(req, res, next) {
	console.log("Doing login!")
    console.log(req.body);
  res.render('login_process', { title: 'Login - Gunny Sack' });
});


module.exports = router;