/**
 * Created by rajith on 2/25/17.
 */
var express = require('express');
var router = express.Router();

//register

router.get('/register',function (req,res,next) {

    res.send('Register');

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