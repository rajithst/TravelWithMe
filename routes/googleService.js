
const express = require('express');
const router = express.Router();



router.get('/getSights',function (req,res) {

    const city = req.body.myid;
    const followersId = req.body.followid;

    SM.followOption(myid,followersId,function (err,docs) {
        if (err) throw err;

        if (docs){

            res.json(docs)
        }



    });

});

module.exports = router;