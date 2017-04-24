/**
 * Created by rajith on 3/7/17.
 */


const  mongoose = require('mongoose');
const config = require('../config/database');
const schema = mongoose.Schema;

var blogSchema = new schema({

    userid:{type:Number},
    name:{type:String},
    tag:{type:String},
    geo:{type:String},
    body:{type:String}
});



const Blogtab =  module.exports = mongoose.model('Blogtab',blogSchema);
