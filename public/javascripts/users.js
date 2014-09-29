var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('Tässä ovat kaikki käyttäjät');
});

module.exports = router;
