const account  = require('../models').account;
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
  //Catch any special characters on the username
  var user_format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var numbers = /^\d+$/;
  var username = req.body.username;
  //removes ALL white spaces
  username = username.replace(/\s+/g, '');
  var pass1 = req.body.password1;
  var pass2 = req.body.password2;
  var email = req.body.email;
  var contact = req.body.contact;
  var fname = req.body.fname;
  var lname = req.body.lname;
  var address = req.body.address;
  var postal = req.body.postal
  var terms = req.body.terms;
  var string_array = [username, pass1, pass2, email, contact,fname,lname,address,postal];

  //server sided verification
  var terms_check = true;
  var empty_check = true;
  var user_check = true;
  var email_check = true;
  var password_check = true;
  var contact_check = true;
  var postal_check = true;

  //checks if terms are ack
  if(terms != 1){
    terms_check = false;
  }

  //checks for empty responses
  for(var scheck in string_array){
    if(isEmpty(scheck)){
        empty_check = false;
        break;
    }
  }

  //checks if username contains special char
  if(user_format.test(username)){
    user_check = false;
  }

  //checks if both password are the same
  if(pass1 !== pass2){
    password_check = false;
  }

  //checks if contact is purely number and the correct length
  if(!numbers.test(contact)|| contact.length != 8){
    contact_check = false;
  }

  //check if postal code is purely number and correct length
  if(!numbers.test(postal)|| postal.length != 6){
    postal_check = false;
  }
  
  if(terms_check && empty_check &&  user_check && email_check && password_check && contact_check && postal_check){
      console.log("Passed!");
      account.create({ username: username , password: pass1, email: email, fname: fname, lname: lname , address: address, postal_code: postal , created_on: new Date() }, { fields: [ "username","password","email","fname","lname","address","postal_code","created_on" ] }).then(task => {
        // you can now access the newly created task via the variable task
        res.redirect('/');
      }).catch(error => {
        console.log(error.errors);
        console.log(error.errors[0].path);
      })
    //end checking condition
    }

});



function isEmpty(str) {
    return (!str || 0 === str.length);
}

module.exports = router;
