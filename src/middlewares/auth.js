const adminAuth = (req,res,next)=>{
    const token = "xyz1";
    const authorized = token === "xyz";
    if(!authorized){
        return res.status(401).send("unauthorized request");
    }
    next();
}

const userAuth = (req,res,next)=>{
    const token = "xyz";
    const authorized = token === "xyz";
    if(!authorized){
        return res.status(401).send("unauthorized request");
    }
    next();
}

module.exports = {
    adminAuth,userAuth}