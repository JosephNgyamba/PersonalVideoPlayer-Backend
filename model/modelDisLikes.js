const mongoose=require('mongoose');
const disLikesSchema=mongoose.Schema({
    CommentId:{type:mongoose.Schema.Types.ObjectId,
    ref:"Comments" },
    userId:{type:mongoose.Schema.Types.ObjectId,
    ref:"Users"}
})
module.exports=mongoose.model('DisLikes',disLikesSchema);