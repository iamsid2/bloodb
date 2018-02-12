var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var conSchema = new Schema({
  name : { type : String, required : true },
  email : { type : String, required : true },
  message : {type : String }
});

var conModel = mongoose.model('con', conSchema );
module.exports = conModel;
