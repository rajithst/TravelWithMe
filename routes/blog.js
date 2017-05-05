/**
 * Created by rajith on 3/7/17.
 */
const express = require('express');
const router = express.Router();
var multer = require('multer');
const config = require('../config/database');



var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');

router.post('/submitpost',function (req,res) {

    console.log(req.body);
});


router.post('/uploadFile',(req,res)=>{
    console.log(req);

    res.json({msg:true})
})

module.exports = router;