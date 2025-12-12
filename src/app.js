const express = require("express");

const app = express();

// this is wildcard route 
// app.use("/user",(req,res)=>{
//     res.send("user not found :(")
// })

app.get("/user",(req,res)=>{
    res.send({
        name:"sidhu",
        age:24
    })
})

app.post("/user",(req,res)=>{
    res.send("user created successfully :)")
})

app.patch("/user",(req,res)=>{
    res.send("user updated successfully :)")
}
)

app.delete("/user",(req,res)=>{
    res.send("user deleted successfully :)")
}
)



app.listen(7777,()=>{
    console.log("server started")
})