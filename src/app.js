const express = require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("hello world")
})

app.use("/hello",(req,res)=>{
    res.send("hello world 2 :) :) :)")
})

app.listen(7777,()=>{
    console.log("server started")
})