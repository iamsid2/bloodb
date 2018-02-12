var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var donSchema = new Schema({
  fname : { type : String, required : true },
  lname : { type : String, required : true },
  age : { type : String, required : true },
  place : { type : String, required : true },
  gender : { type : String, required : true },
  bgroup : { type : String, required : true }
});

var donModel = mongoose.model('don', donSchema );
module.exports = donModel;
