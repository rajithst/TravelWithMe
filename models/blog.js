/**
 * Created by rajith on 3/7/17.
 */


const  mongoose = require('mongoose');
const config = require('../config/database');
const schema = mongoose.Schema;

var blogSchema = new schema({

    userid:{type:String},
    postTtile:{type:String},
    body:{type:String},
    dateAdded:{type:String}
});



const Blogtab =  module.exports = mongoose.model('Blogtab',blogSchema);

module.exports.addBlogpost = function (blogdata,callback) {
   
    blogdata.save(callback);
};