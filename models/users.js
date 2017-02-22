/**
 * Created by rajith on 2/22/17.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({

    name:{type:String,requied:true},
    email:{type:String,requied:true},
    last_name:{type:String,requied:true},

    password:{type:String,requied:true},
    imagePath:{type:String,requied:true},


});



module.exports = mongoose.model('User',userSchema);