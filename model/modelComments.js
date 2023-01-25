const mongoose=require('mongoose');

const commentSchema=mongoose.Schema({

    comments:{type:String,required:false},
    userProfile:{type:String,required:false},
    videoId:{type:String,required:false},
    userName:{type:String,required:false},
    userMail:{type:String,required:false},
    
})

module.exports=mongoose.model('Comments', commentSchema);