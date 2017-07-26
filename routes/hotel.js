const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Bpage = require('../models/businesspages');


router.get('/gethoteldata/:id',function(req,res){

      Bpage.getpagedata(req.params.id,(err,docs)=>{

                if (err){
                    throw err
                }

                if (docs){

                     res.json({docs})
                }

            })

})








module.exports = router;