var express = require("express");
var router = express.Router();
var Triptab = require("../models/trip");

router.get('/', function(req,res){
    //res.send("This is from route app");
    Triptab.getTrip(function(err,trip){
        if(err) throw err;
        res.json(trip);
    });
});

router.post('/addtrips', function(req,res){
    var newTrip = {
        waypoints : req.body.waypoints,
        from : req.body.from,
        to : req.body.to
    }

    Triptab.addTrip(newTrip,function(err,trip){
        if(err) throw err;
        res.json(trip);
    })
})

module.exports = router;