const  mongoose = require('mongoose');
const config = require('../config/database');
const schema = mongoose.Schema;
var async = require('async');
var fs = require('fs');
var TripSchema = new schema({
 
    waypoints:{type:Array},
    from:{type:String},
    To : {type:String}

});



const Triptab =  module.exports = mongoose.model('Triptab',blogSchema);

module.exports.addTrip = function (newTrip,callback) {

     newTrip.save()

}


module.exports.getTrip = function (id,callback) {

    Triptab.find(id,callback);
};