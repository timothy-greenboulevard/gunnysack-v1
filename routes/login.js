var models  = require('../models');
var express = require('express');
var router = express.Router();
var pg = require('pg');
const accountController = require('../controllers').account_model;


//Post Login Details
router.post('/login_process', function(req, res, next) {
	console.log("Doing login!")
    console.log(req.body);
  res.render('login_process', { title: 'Login - Gunny Sack' });
});


//GET Login Page
router.get('/', function(req, res, next) {
	res.render('login', { title: 'Login - Gunny Sack' });
	models.account.findAll().then((account) => {
		console.log(account[0].dataValues);
	}).catch((error) => { res.status(400).send(error); })
    
});

//restful API example to use when developing mobile app!
//router.get('/test',accountController.list);

module.exports = router;