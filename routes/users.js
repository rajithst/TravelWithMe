/**
 * Created by rajith on 2/25/17.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/users');


//register

router.post('/register',function (req,res,next) {

    var newUser = new User({
        name : req.body.name,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password

    });
    User.addUser(newUser,function (err,user) {
        if (err){
            res.json({success:false,msg:"Failed to register User"});
        }else{
            res.json({success:true,msg:"Successfully registered User"});
        }
    })

});

//authenticate
router.post('/authenticate',function (req,res,next) {

    res.send('auth');

});

//profile
router.get('/profile',function (req,res,next) {

    res.send('profile');

});

//validate
router.get('/validate',function (req,res,next) {

    res.send('validate');

});

module.exports = router;