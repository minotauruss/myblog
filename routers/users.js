const express = require("express");
const User = require("../models/users.js");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken")




router.post("/",async (req,res)=>{
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







module.exports=router;