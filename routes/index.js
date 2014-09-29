var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('layout.html', { title: 'Express' });
});

router.get('/t', function(req, res) {
  res.render('test');
});

module.exports = router;
