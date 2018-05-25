'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema  = new Schema ({
    name,String,
    userName:{type:String,required: true},
    age:{type:int},
    idNumber:{type:String,required:true}  

});
module.exports = mongoose.model('Users', userSchema);
