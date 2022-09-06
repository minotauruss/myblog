const express = require("express");
const User = require("../models/users.js");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken")





router.post("/",async (req,res)=>{
    res.send("yeni bir user yaratıldı")
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





module.exports=router;