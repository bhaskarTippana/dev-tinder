const validator = require('validator');
const validationSingup = (req)=>{
    const {firstName,lastName,email,password,age,gender} = req;
    if(firstName.length < 3 || firstName.length > 50){
      throw new Error("firstName should be between 3 and 50 characters");
    }else if(lastName.length < 3 || lastName.length > 50){
      throw new Error("lastName should be between 3 and 50 characters");
    }else if(!validator.isStrongPassword(password)){
      throw new Error("password should be strong");
    }else if(age < 18){
      throw new Error("age should be greater than 18");
    }else if(!["male","female","others"].includes(gender)){
      throw new Error("gender should be male,female or others");
    }else if(!validator.isEmail(email)){
      throw new Error("email should be valid");
    }
}

const validationEditProfile = (req)=>{
    const EditableFeilds = ["firstName","lastName","age","gender","skills","about"];
   const isEditable = Object.keys(req).every((feild)=>EditableFeilds.includes(feild));
    return isEditable;
}

module.exports = {
    validationSingup,
    validationEditProfile
}