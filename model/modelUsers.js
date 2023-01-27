const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{type:String, required:true},
    mail:{type:String, required:true},
    profilLink:{type:String, required:true},
})
module.exports=mongoose.model('Users',userSchema);