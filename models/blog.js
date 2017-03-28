/**
 * Created by rajith on 3/7/17.
 */


const  mongoose = require('mongoose');
const config = require('../config/database');
const schema = mongoose.Schema;

var blogSchema = new schema({

    useerid:{type:Number},
    name:{type:String},
    tag:{type:String},
    geo:{type:String},
    body:{type:String}
});



const Blogtab =  module.exports = mongoose.model('Blogtab',blogSchema);

/*
 module.exports.getUserById = function (id,callback) {

 User.findById(id,callback);
 }

 module.exports.getUserByemail = function (email,callback) {
 const query = {email:email}
 User.findOne(query,callback);
 }

module.exports.addBpagedata = function (BusinessPage,callback) {

    BusinessPage.save(callback);
}


/*
 module.exports.comparePassword = function (passwrod,hash,callback) {
 bcrypt.compare(passwrod, hash, function(err, isMatch) {
 if(err) throw err;
 if(isMatch){
 console.log(isMatch);
 callback(null,isMatch);
 }else{
 callback(null,false);
 }
 });
 }*/
