const  mongoose = require('mongoose');
const config = require('../config/database');

const schema = mongoose.Schema;

var roomsSchema = new schema({

     uid:{type:String},
     pageId:{type:String},
     roomname: {type:String},
     price: {type:String},
     size:{type:String}
});


const Rooms =  module.exports = mongoose.model('Rooms',roomsSchema);

module.exports.addRoom = function (room,callback) {

   /* var randomnumber=Math.floor(Math.random()*101)
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


    Rooms.featured_img = "assets/images/blog/"+PostData.userid+"_"+randomnumber+".png";*/
    room.save(callback);
};

module.exports.getroomdata = function (id,callback) {

    Rooms.find({pageId:id},function(err,docs){

         if (err) throw err;

             if (docs){
                 callback(null,docs);
             }


    })
};