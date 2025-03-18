const adminAuth = (req,res,next)=>{
    console.log('admin auth has been called !');
    const token = 'sidhu';
    const isAuthorized = token === 'sidhu';
    if(isAuthorized){
        next();
    }else{
        res.status(401).send('Unauthorized');
    }
}

module.exports = {
    adminAuth
}