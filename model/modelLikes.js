const mongoose=require('mongoose');
const likesSchema=mongoose.Schema({
    likes:{type:Number},
    CommentId:{type:String},
    videoId:{type:String},
    userName:{type:String}
})
module.exports=mongoose.model('Likes',likesSchema);