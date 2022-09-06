const express = require("express");
const User = require("../models/users.js");
const bcrypt = require("bcrypt");
const routerlogin = express.Router();
const jwt = require("jsonwebtoken")





routerlogin.post("/",async (req,res)=>{
   
    const{email,password} = req.body
    const user = await User.findOne({email,password}).lean()

if(!user){
    return res.json({status:"error", error:"Invalid username/password"})
}

if(await bcrypt.compare(password,user.password)){
    const token = jwt.sign({
        id:user._id,
        email:user.email,},
        "deneme")
    return res.json({status:"ok", data:""})
}


    res.json({status:"ok", data:"yakında"})
  
    
});





module.exports=routerlogin;