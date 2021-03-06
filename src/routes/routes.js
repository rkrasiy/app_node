var express = require('express');
var router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
router.get('/', function(req, res) {
  res.send('home page');
});

// Define the about route
router.get('/about', function(req, res) {
  res.send('About us');
});

// Define the about route
router.get('/kr-admin', function(req, res) {
  res.send('Hello my Admin');
});

module.exports = router;