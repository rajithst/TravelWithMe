/**
 * Created by rajith on 3/3/17.
 */
/**
 * Created by rajith on 2/25/17.
 */

const  mongoose = require('mongoose');
const config = require('../config/database');
const schema = mongoose.Schema;

var businesspageSchema = new schema({

    useerid:{type:Number},
    pagename:{type:String},
    businesstype:{type:String},
    pageimage:{type:String},
    targetareas:{type:String}
});



const Bpage =  module.exports = mongoose.model('Bpage',businesspageSchema);

/*
module.exports.getUserById = function (id,callback) {

    User.findById(id,callback);
}

module.exports.getUserByemail = function (email,callback) {
    const query = {email:email}
    User.findOne(query,callback);
}
*/
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
