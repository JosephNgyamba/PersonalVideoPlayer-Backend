const mongoose=require('mongoose');
const likesSchema=mongoose.Schema({
    CommentId:{type:mongoose.Schema.Types.ObjectId,
    ref:"Comments" },
    userId:{type:mongoose.Schema.Types.ObjectId,
    ref:"Users"}
})
module.exports=mongoose.model('Likes',likesSchema);