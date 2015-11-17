var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/search', function(req, res, next){
  console.log('test');
  res.render('search', { title: 'Express' });
});

module.exports = router;
