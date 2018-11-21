var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('commons/signup.ejs', { title: 'SignUp' });
});


router.get('/signin', function(req, res, next) {
  res.render('commons/signin.ejs', { title: 'SignIn' });
});

module.exports = router;
