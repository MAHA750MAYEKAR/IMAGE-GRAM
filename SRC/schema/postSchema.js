import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    image:{
        type:String,
        require:true,
    },
    caption:{
        type:String,
        require:true,
        minlength:5
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }


},{
    timestamps:true
})

const post=mongoose.model("Post",postSchema)

export default post