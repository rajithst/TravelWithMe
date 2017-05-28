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
    var path="./uploads/images/blog/featured/"+text+"_"+PostData.userid+"_"+dt+".png";

    fs.writeFile(path,base64d,'base64',function(err){
        if(err) {
            return console.log(err);
        }

    });


    PostData.featured_img = "../uploads/images/blog/featured/"+text+"_"+PostData.userid+"_"+dt+".png";
    PostData.save(callback);
};


module.exports.getFollowersPosts = (usersArray,callbacl)=>{

    let arr = [];
    var arr3 = [];

    for(var i=0; i<usersArray.length; i++){

        console.log(usersArray[i])
        Blogtab.find({userid:usersArray[i]})
                .sort({'dateAdded': -1})
                 .exec(function(err,docs){

            if(err) {
                return console.log(err);
            }
            if (docs){


                 var arr3 = arr.concat(docs);
                 var arr = arr3;
                 console.log(arr)


            }

        });



    }

    console.log("out"+arr)
    callbacl(null,arr)
}