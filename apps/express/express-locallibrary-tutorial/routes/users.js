var express = require('express');
var router = express.Router();
const { data,setItem } = require('../data');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(data);
});

/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.send('cool guy');
});

module.exports = router;
