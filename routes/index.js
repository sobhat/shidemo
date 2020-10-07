var express = require('express');
var router = express.Router();
var launchTime = new Date("12/29/2019 10:00").getTime();

/* GET home page. */
router.get('/', function(req, res, next) {
  var currentTime = new Date().getTime();
var numberOfMilliseconds = parseInt(launchTime - currentTime);
res.render('index', { title: 'Countdown to Launch', countDown: numberOfMilliseconds });
});

module.exports = router;
