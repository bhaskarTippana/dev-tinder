const express = require("express");
const {adminAuth,userAuth} = require("./middlewares/auth");

const app = express();

app.get("/user",(req,res)=>{
    try {
        // res.send("user page");
        throw new Error();
    } catch (error) {
        res.status(401).send("user page not found");
    }
})

app.use("/",(err,req,res,next)=>{
if(err){
     res.status(500).send("something went wrong");
}
})

app.listen(7777,()=>{
    console.log("server started")
})