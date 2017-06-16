var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET calc page. */
router.get('/calculadora', function(req, res, next) {
  res.render('calculadora', { title: 'Calc' });
});
module.exports = router;
