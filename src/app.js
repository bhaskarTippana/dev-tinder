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


app.use('/user',(req,res,next)=>{
    // res.send("user not found :(")
    next();
},(req,res,next)=>{
    // res.send("Testing the Api :)")
    next();
},(req,res,next)=>{
    // res.send("Testing the Api 1 :)")
    console.log("this is a middleware")
    next();
    res.send("Testing the Api 2 :)")
})

app.listen(7777,()=>{
    console.log("server started")
})