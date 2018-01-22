var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Task 1' });
});

router.get('/task', function(req, res, next) {
  res.render('index', { title: 'Task 3' });
});

router.get('/task-2', function(req, res, next) {
  res.render('index', { title: 'Task 2' });
});

module.exports = router;
