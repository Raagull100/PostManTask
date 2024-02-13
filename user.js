const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"hello this is user request"
    });
    console.log("This is get request");
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"hello this is user post request",
    });
    console.log("This is post request");
});

router.put('/',(req,res,next)=>{
    res.status(200).json({
        message:"hello this is user put request"
    });
    console.log("This is put request");
});

router.patch('/',(req,res,next)=>{
    res.status(200).json({
        message:"hello this is user patch request"
    });
    console.log("This is patch request");
});

router.delete('/',(req,res,next)=>{
    res.status(200).json({
        message:"hello this is user delete request"
    });
    console.log("This is delete request");
});

module.exports = router;