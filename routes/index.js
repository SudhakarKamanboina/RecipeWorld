var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search/:q', function(req, res, next){
  res.render('search', {query: req.params.q});
});

router.get('/recipe/:q', function(req, res, next){
  res.render('recipe', {query: req.params.q});
});

module.exports = router;
