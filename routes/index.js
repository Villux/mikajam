var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('layout.jade', { title: 'Express' });
});

module.exports = router;
