const express = require('express');
const app = express();

const userRouter = require('./user') 
app.use('/user',userRouter);

app.use('/',(req,res,next)=>{
    res.status(200).json({
        message:"helloworld"
    });
});

module.exports = app;