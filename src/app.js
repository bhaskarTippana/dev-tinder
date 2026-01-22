const express = require("express");
const {adminAuth,userAuth} = require("./middlewares/auth");

const app = express();
app.use('/admin',adminAuth);

app.get("/user/profile",userAuth,(req,res)=>{
    res.send("user page");
})

app.get("/admin/getAllUsers", (req, res) => {
    res.send("get all users");
});
app.delete("/admin/deleteUser", (req, res) => {
    res.send("delete user");
});

app.listen(7777,()=>{
    console.log("server started")
})