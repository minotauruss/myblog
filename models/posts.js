const mongoose = require("mongoose");

const postShcema = mongoose.Schema({
    username: String,
    _id:String,
    date:String,
    name:String,
    userId : String,
    mentions:Array,
    hashtags:Array,
    geo:String,
    tweet : String,
    geo : String,
    language : String,
    creatAt:{
        type: Date,
        default : new Date(),
    }
});

const Post = mongoose.model("post", postShcema);
module.exports= Post ;