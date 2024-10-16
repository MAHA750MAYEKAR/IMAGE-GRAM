import mongoose from "mongoose";
import User from  "../schema/userSchema.js"

export const findUserByEmail=async (email)=>{
    try{
        const user=await User.findOne({email})
        return user

    }
    catch(err){
        console.log("something went wrong");
        
        console.log(err);

    }

}

export const findAllUsers=async(email)=>{
    try{
        const users=await User.find({email})
        return users
    }catch(err){
        console.log("something went wrong");
        
        console.log(err);

    }

}