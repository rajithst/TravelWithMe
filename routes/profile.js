/**
 * Created by rajith on 3/3/17.
 */
/**
 * Created by rajith on 2/25/17.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/users');
const config = require('../config/database');


//register

router.post('/createpage',function (req,res,next) {




   res.json({user:req.body});
});

//authenticate

//profile
router.get('/profile',passport.authenticate('jwt',{session:false}),function (req,res,next) {

    console.log(req.user);
    res.json({user:req.user});

});


module.exports = router;