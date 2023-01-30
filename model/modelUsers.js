const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{type:String, required:true   },
    mail:{type:String, required:true},
    profilLink:{type:String, required:false},
    facebookLink:{type:String, required:true},
    linkedinLink:{type:String,required:true}
})
module.exports=mongoose.model('Users',userSchema);