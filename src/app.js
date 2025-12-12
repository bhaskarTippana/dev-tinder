const express = require("express");

const app = express();

// this is wildcard route 
// app.use("/user",(req,res)=>{
//     res.send("user not found :(")
// })

// app.get("/abc",(req,res)=>{
//     res.send("Testing the Api :)")
// })

// app.get(/ab?c/,(req,res)=>{
//     res.send("Testing the Api :)")
// })

// app.get(/ab+c/,(req,res)=>{
//     res.send("Testing the Api :)")
// })

// app.get(/ab*c/,(req,res)=>{
//     res.send("Testing the Api :)")
// })

// app.get(/a(bc)?d/,(req,res)=>{
//     res.send("Testing the Api :)")
// })

// app.get(/a(bc)+d/,(req,res)=>{
//     res.send("Testing the Api :)")
// })

// app.get(/a(bc)*d/,(req,res)=>{
//     res.send("Testing the Api :)")
// })

// app.get(/a/,(req,res)=>{
//     res.send("Testing the Api :)")
// })

// app.get(/.*fly/,(req,res)=>{
//     res.send("Testing the Api :)")
// })


app.listen(7777,()=>{
    console.log("server started")
})