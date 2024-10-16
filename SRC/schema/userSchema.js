import mongoose from "mongoose";

const userschema=new mongoose.Schema({
   username:{
    type:String,
    require:true,
    unique:true,
    minlength:6
   },
   password:{
    type:String,
    require:true
   
   },
   email:{
    type:String,
    require:true,
    unique:true,
    validate:{
        validator:function(emailValue){
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);

        },
        message:"invalid email format"
    }
   }

},{timestamps:true})

const user=mongoose.model("User",userschema)

export default user