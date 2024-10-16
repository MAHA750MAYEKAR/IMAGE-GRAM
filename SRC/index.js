import express from "express";
const PORT=8000
import connectDB from "./config/DBconfig.js";
import { uploaders3 } from "./config/multerConfig.js";
import { createPost } from "./controller/postController.js";
import AWS_BUCKET_NAME from "./config/serverConfig.js";


const APP=express()
APP.use(express.text())
APP.use(express.json())
APP.use(express.urlencoded())

APP.get('/',(req,res)=>{
    return res.send("hello word")

})
APP.get('/ping',(req,res)=>{
    return res.json({"message":"hello"})

})

APP.get('/Post',(uploaders3.single("image") ,createPost))


APP.listen(PORT,()=>{
    console.log("SERVER IS LISTENING ON PORT",PORT);
    connectDB()
    console.log(AWS_BUCKET_NAME )})
