const mongoose=require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


const userSchema=mongoose.Schema({
    name:{type:String, required:false   },
    prenom:{type:String,required:false},
    mail:{type:String, required:true, unique:true},
    profilLink:{type:String, required:false},
    facebookLink:{type:String, required:false},
    linkedinLink:{type:String,required:false}
})
userSchema.plugin(uniqueValidator);
module.exports=mongoose.model('Users',userSchema);