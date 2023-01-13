const mongoose=require('mongoose');

const commentSchema=mongoose.Schema({

    comments:{type:String,required:true},
    userProfile:{type:String,required:true},
    videoId:{type:String,required:true},
    userName:{type:String,required:true},
    userMail:{type:String,required:true},
    
})

module.exports=mongoose.model('Comments', commentSchema);