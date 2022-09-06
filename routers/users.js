const express = require("express");
const User = require("../models/users.js");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken")




router.post("/register",async (req,res)=>{
    res.send("yeni bir user yaratıldı")
    const{email,password} = req.body
    try {
       const response =  await User.create({
            email,
            password
        })
        console.log(response)
    } catch (error) {
        console.log(error)
        return res.json({status: "error"})
    }
    
});

router.post("/login",async (req,res)=>{
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