var mongoose = require('mongoose');
var donModel = require('../models/donors');

var donUser = function(req,res){
  var donmodel = new donModel({
    fname : req.body.fname,
    lname : req.body.lname,
    age : req.body.age,
    place : req.body.place,
    gender : req.body.gender,
    bgroup : req.body.bgroup

  });
  donmodel.save(function(err,doc){
    if(err) res.json(err);
    else   res.json({ "msg" : "We Will Contact You Soon"});
  });
}
module.exports = {"donUser" : donUser };
