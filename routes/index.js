var express = require('express');
var router = express.Router();
var contres = require('../controller/contres');
var donres = require('../controller/donres');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Blood Donation' });
});

router.get('/donate', function(req,res){
  res.render('pages/donate');
});

router.get('/need', function(req,res){
  res.render('pages/need');
});

router.get('/contact', function(req,res){
  res.render('pages/contact');
});
router.post('/contact', contres.conUser );
router.post('/donate', donres.donUser);
module.exports = router;
