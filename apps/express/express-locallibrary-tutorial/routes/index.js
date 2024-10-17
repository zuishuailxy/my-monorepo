var express = require('express');
var router = express.Router();
const { data,setItem } = require('../data');

setItem('name', 'Local Library');
setItem('hobby', 'red book');
setItem('age', '19');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: data.name });
});

module.exports = router;
