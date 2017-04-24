/**
 * Created by rajith on 3/11/17.
 */

const  mongoose = require('mongoose');
const config = require('../config/database');
const schema = mongoose.Schema;

var socialMeadia = new schema({

    id:{type:String},
    provider:{type:String},
    followeusers:{type:String},
    followpages:{typ:String}
});



const SM =  module.exports = mongoose.model('SM',socialMeadia);




module.exports.checkId = function (id,provider,callback) {
    const query = {id:id,provider:provider};
    SM.findOne(query,function (err,docs) {
             if (err) throw err;

             if (docs){
                 callback(null,docs);
             }
             if (!docs){

                 newentry = new SM(query);
                 newentry.save(function (err,docs) {

                     if (err) throw err;
                     if (docs){
                         callback(null,docs);
                     }
                 })
             }

         });

};

module.exports.followOption = function (myid,followersId,callback) {


    SM.findOneAndUpdate({id: myid},{$set:{followeusers:followersId}},function (err,docs) {
        if (err) throw err;

        if (docs){
            callback(null,docs);
        }


    });

};