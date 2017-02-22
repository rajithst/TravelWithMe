var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();
mongoose.connect("localhost:27017/travelbook");
require('./config/passport');


app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname+"/public"));



app.post('/signin',function (req,res) {


    console.log(req.body);


});
app.post('/signup',function (req,res) {




})



app.listen(3000,function(){
	
	console.log('listening to server via port 3000 using nodeman');

});

