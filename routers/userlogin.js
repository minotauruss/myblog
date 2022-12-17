const express = require("express");
const User = require("../models/users.js");

const routerlogin = express.Router();
const jwt = require("jsonwebtoken")





routerlogin.post("/",async (req,res)=>{
   
    const{email,password} = req.body
    const user = await User.findOne({email,password}).lean()

  const token = jwt.sign({
    id:user._id,
    email:user.email,},
    "deneme")
return res.send(token)
  
    
});





module.exports=routerlogin;