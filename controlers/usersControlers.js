const Users = require('../model/modelUsers');


exports.createUser=(req,res,next)=>{
      const userInfo=new Users({
          ...req.body
     });
     userInfo.save()
     .then(()=>res.status(200).json({message:'commentaire créé'}))
     .catch(error=>res.status(400).json({error}))
}

exports.getUsers=(req,res,next)=>{
    Users.find()
    .then(users=>res.status(201).json(users))
    .catch(error=>res.status(400).json({error}))
     
}
exports.updateUser=(req,res,next)=>{
        
        Users.updateOne({_id:req.params.id},{...req.body, _id:req.params.id})
        .then(()=>res.status(200).json({message:'user modifié'}))
        .catch(error=>res.status(400).json({error}))
}

exports.deleteUser=(req,res,next)=>{

        Users.deleteOne({_id:req.params.id},{...req.body, _id:req.params.id})
        .then(()=>res.status(200).json({message:'user modifié'}))
        .catch(error=>res.status(400).json({error}))
}
