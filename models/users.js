const mongoose = require("mongoose");

const postShcema = mongoose.Schema({
    email:String,
    password:String,
});

const User = mongoose.model("user", postShcema);
module.exports= User ;