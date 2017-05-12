/**
 * Created by rajith on 3/7/17.
 */
const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Blogpost = require('../models/blog');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});




router.post('/submitpost',function (req,res) {


   const blogpost = new Blogpost({

        userid: req.body.userid,
        postTtile: req.body.postTtile,
        body: req.body.body,
       featured_img:'',
        dateAdded: Date()
    });

    
    Blogpost.addBlogpost(blogpost,(err,callback)=>{

        if (err){
            res.json({success:false,msg:"Failed"});
        }else{
            res.json({success:true,msg:"Saved your blog post"});
        }

    })
    
    
});

router.get('/getPosts/:id',(req,res)=>{
    console.log(req.params.id);
   res.json({success:false,msg:"Failed"})

});



module.exports = router;