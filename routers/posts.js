const express = require("express");
const Post = require("../models/posts.js");

const router = express.Router();

router.get("/",(req,res)=>{
    Post.find()
    .then((posts)=>{
        res.json(posts)
    })
    .catch((err)=>{
        res.json(err)
    })
});

router.get("/:id",(req,res)=>{
    Post.findById(req.params.id)
    .then((posts)=>{
        res.json(posts)
    })
    .catch((err)=>{
        res.json(err)
    })
});


router.post("/",(req,res)=>{
    res.send("yeni bir post yaratıldı")
    const postServices= new Post({
       username:req.body.username,
       tweet:req.body.tweet,
        geo : req.body.geo,
        language : req.body.language,
        _id:req.body._id,
        date:req.body.date,
        name:req.body.name,
        userId : req.body.user_id,
        mentions:req.body.mentions,
        hashtags:req.body.hashtags,

    });
    postServices.save();
});

router.put("/:id",(req,res)=>{
    Post.findByIdAndUpdate(req.params.id,{
        title:req.body.title,
        subtitle:req.body.subtitle,
        image : req.body.image,
        tag : req.body.tag,
    })
    .then((posts)=>{
        res.json(posts)
    })
    .catch((posts)=>{
        res.json(err)
    })
});

router.delete("/:id",(req,res)=>{
    Post.findByIdAndDelete(req.params.id)
    .then((posts)=>{
        res.json(posts);
    })
    .catch((err)=>{
        res.json(err)
    })
});



module.exports=router;