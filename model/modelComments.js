const mongoose=require('mongoose');

const commentSchema=mongoose.Schema({

    comments:{type:String,required:false},
    videoId:{type:String,required:false},
    userId:{ type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:false},
})

module.exports=mongoose.model('Comments', commentSchema);