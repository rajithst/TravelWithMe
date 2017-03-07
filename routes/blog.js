/**
 * Created by rajith on 3/7/17.
 */
const express = require('express');
const router = express.Router();

const config = require('../config/database');


router.post('/submitpost',function (req,res) {

    console.log(req.body);
});

module.exports = router;