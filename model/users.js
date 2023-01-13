const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    nom:{type:String, required:true},
    prenom:{type:String, required:true},
    profil:{type:String, required:true},
})
module.exports=mongoose.model('Users',userSchema);