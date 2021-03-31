var express = require('express');
var router = express.Router();
var students_controllers =require('../controllers/students.controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'home',menuId:'home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About us',menuId:'about' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'contact us',menuId:'contact' });
});

router.get('/students',students_controllers.list);
module.exports = router;


