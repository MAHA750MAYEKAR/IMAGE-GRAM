import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";
export default async function connectDB(){
    try{
        await mongoose.connect(DB_URL)
        console.log("connected to DB");
        

    }
    catch(ERR){
        console.log("SOMETHING WENT WRONG");
        console.log(ERR);
        
        

    }
}