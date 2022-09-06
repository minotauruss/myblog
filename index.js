const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require ("cors");
const postRouter = require("./routers/posts.js")
const userRouter = require("./routers/users.js")
const loginRouter = require("./routers/userlogin.js")

const app = express ();

app.use(cors());
app.use(bodyParser.json());

app.use("/posts",postRouter);
app.use("/users",userRouter);
app.use("/login",loginRouter);

app.get("/", (req, res)=>{
    res.json({
        author : "özkan sarı",
        message : "heroku message"
    })
});



const PORT = process.env.PORT || 5000 ;

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser :true,
    useUnifiedTopology:true
})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server ${PORT}'da çalışmaktadır`)
    })
})
.catch(error =>{
    console.log(error.message);
})