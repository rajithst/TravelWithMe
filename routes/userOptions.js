/**
 * Created by rajith on 4/24/17.
 */
const express = require('express');
const router = express.Router();
const User = require('../models/users');


router.post('/FollowOption',function (req,res) {

    console.log(req.body);
    res.json({msg:1})

});

module.exports = router;