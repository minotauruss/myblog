const mongoose = require("mongoose");

const postShcema = mongoose.Schema({
    title: String,
    subtitle : String,
    image : String,
    tag : Array,
    creatAt:{
        type: Date,
        default : new Date(),
    }
});

const Post = mongoose.model("post", postShcema);
module.exports= Post ;