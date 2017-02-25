/**
 * Created by rajith on 2/25/17.
 */

const  mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const schema = mongoose.Schema;

var userSchema = new schema({


    name:{type:String},
    email:{type:String},
    username:{type:String},
    password:{type:String}

});

const User =  module.exports = mongoose.model('User',userSchema);

module.exports.getUserById = function (id,callback) {

    User.findById(id,callback);
}

module.exports.getUserByUsername = function (username,callback) {
    const query = {username:username}
    User.findOne(query,callback);
}

module.exports.addUser = function (newUser,callback) {
    bcrypt.genSalt(10,function (err,salt) {
        bcrypt.hash(newUser.password,salt, function (err,hash) {
            if(err) throw err;

            newUser.password = hash;
            newUser.save(callback);
        });
    });

}