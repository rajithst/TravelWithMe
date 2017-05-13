/**
 * Created by rajith on 3/7/17.
 */


const  mongoose = require('mongoose');
const config = require('../config/database');
const schema = mongoose.Schema;
var fs = require('fs');
var blogSchema = new schema({

    userid:{type:String},
    postTtile:{type:String},
    body:{type:String},
    featured_img:{type:String},
    dateAdded:{type:String}
});



const Blogtab =  module.exports = mongoose.model('Blogtab',blogSchema);

module.exports.addBlogpost = function (PostData,callback) {

    var dt=new Date();
    var text = "featured_image_";
    var pos=PostData.featured_img.indexOf(",");

    var base64d=PostData.featured_img.substring(pos+1);
<<<<<<< HEAD
    var path="./uploads/images/blog/featured/"+text+"_"+PostData.userid+"_"+dt+".png";
=======
    var path="./uploads/images/blog/"+text+"_"+PostData.userid+"_"+dt+".png";
>>>>>>> d3ad578dc10283c4f0d6db94f90ff1633a6d375f
    fs.writeFile(path,base64d,'base64',function(err){
        if(err) {
            return console.log(err);
        }

    });

<<<<<<< HEAD
    PostData.featured_img = "../uploads/images/blog/featured/"+text+"_"+PostData.userid+"_"+dt+".png";
=======
    PostData.featured_img = "../uploads/images/blog/"+text+"_"+PostData.userid+"_"+dt+".png";
>>>>>>> d3ad578dc10283c4f0d6db94f90ff1633a6d375f
    PostData.save(callback);
};