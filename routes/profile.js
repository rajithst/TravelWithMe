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
const Bpage = require('../models/businesspages');
const config = require('../config/database');


//register

router.post('/createpage',function (req,res,next) {

    var BusinessPage = new Bpage({

        userid:req.body.uid,
        pagename:req.body.pagename,
        email:req.body.email,
        telephone:req.body.telephone,
        website:req.body.website,
        businesstype:req.body.businesstype,
        description:req.body.description,
        location:req.body.location

    });

    console.log(BusinessPage)


    Bpage.addBpagedata(BusinessPage,function (err,docs) {
        if (err){
            res.json({success:false,msg:"Failed to create page"});
        }else{
            console.log(docs);
            res.json({success:true,msg:docs});
        }
    })

});


//profile
router.get('/profile',passport.authenticate('jwt',{session:false}),function (req,res,next) {

    //console.log(req.user);
    res.json({user:req.user});

});


module.exports = router;