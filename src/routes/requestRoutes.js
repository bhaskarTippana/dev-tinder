const express = require("express");
const requestRouter = express.Router();

requestRouter.post("/sendconnection",(req,res)=>{
    res.status(200).send("request sent successfully");
})

module.exports = requestRouter