import Post from "../schema/postSchema.js"

const createPost = async (image, caption, user) => {

    try {
        const newPost = await Post.create({ image, caption, user })
        return newPost
    }
    catch (err) {
        console.log("something went wrong");
        console.log(err);
    }
}

const findAllPost=async()=>{
    try{
        const posts=await Post.find()
        return posts
    }
    catch(err){
       

    }
}

const findPostById=async(id)=>{
    try{
        const post=await Post.findById({id})
        return post
    }
    catch(err){
        console.log("something went wrong");
        console.log(err);

    }
    
}