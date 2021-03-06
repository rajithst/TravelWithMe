/**
 * Created by rajith on 3/7/17.
 */


const  mongoose = require('mongoose');
const config = require('../config/database');
const schema = mongoose.Schema;
var async = require('async');
var fs = require('fs');
var blogSchema = new schema({

    userid:{type:String},
    username:{type:String},
    img:{type:String},
    postTtile:{type:String},
    body:{type:String},
    featured_img:{type:String},
    dateAdded:{type:String},
    location:{type:String},

});



const Blogtab =  module.exports = mongoose.model('Blogtab',blogSchema);

module.exports.addBlogpost = function (PostData,callback) {

    var randomnumber=Math.floor(Math.random()*101)
    var pos=PostData.featured_img.indexOf(",");

    var base64d=PostData.featured_img.substring(pos+1);
    var path="AngularFront\\src\\assets\\images\\blog\\"+PostData.userid+"_"+randomnumber+".png";

    fs.writeFile(path,base64d,'base64',function(err){
        if(err) {
            return console.log(err);
        }else{
            console.log("done")
        }

    });


    PostData.featured_img = "assets/images/blog/"+PostData.userid+"_"+randomnumber+".png";
    PostData.save(callback);
};


module.exports.getFollowersPosts = (usersArray,callback)=>{

    /*var results = [];

    async.each(usersArray,function (item,callback) {

          Blogtab.find({userid:item})
                .sort({'dateAdded': -1})
                 .exec(function(err,docs){

            if (docs){

                  results.push(docs);
                  callback();

            }else{
                callback();
            }

        });

    }, function(err){

        console.log(results);
        callbacl(null,results)
    });*/
 Blogtab.find({}).sort({'dateAdded': -1}).exec(function(err,docs){

         if (err) throw err;

             if (docs){
                 callback(null,docs);
             }


    })


};

module.exports.getpostData = (id,callback)=>{

    Blogtab.find({_id:id},function(err,docs){

         if (err) throw err;

             if (docs){
                 callback(null,docs);
             }


    })
}

module.exports.getblogData = (key,callback)=>{

    Blogtab.find({location:{'$regex': key, '$options': 'i'}},function(err,docs){

         if (err) throw err;

             if (docs){
                 callback(null,docs);
             }


    })
}