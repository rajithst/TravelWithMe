/**
 * Created by rajith on 3/7/17.
 */
const express = require('express');
const router = express.Router();


var multer = require('multer');
const config = require('../config/database');
const Blogpost = require('../models/blog');




router.post('/submitpost',function (req,res) {
    const blogpost = new Blogpost({

        userid: req.body.user_id,
        postTtile: req.body.title,
        body: req.body.postBody,
        dateAdded: Date()
    });

    console.log(blogpost);
    res.json({success:false,msg:"Failed"});
    
  /*  Blogpost.addBlogpost(blogpost,(err,callback)=>{

        if (err){
            res.json({success:false,msg:"Failed"});
        }else{
            res.json({success:true,msg:"Saved your blog post"});
        }

    })*/
    
    
});



module.exports = router;