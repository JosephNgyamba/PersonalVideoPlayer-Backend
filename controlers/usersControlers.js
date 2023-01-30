const Users = require('../model/modelUsers');

exports.createUser=(req,res,next)=>{
      const userInfo=new Users({
          ...req.body
     });
     userInfo.save()
     .then(()=>res.status(200).json({message:'user créé'}))
     .catch(error=>res.status(400).json({error}))
}

exports.getUsers=(req,res,next)=>{
    Users.find()
    .then(users=>res.status(201).json(users))
    .catch(error=>res.status(400).json({error}))
     
}
exports.getOneUser=(req,res,next)=>{
     console.log(id);
  Comments.findOne({_id:req.params._id},{...req.body, _id:req.params._id})
  .then(()=>res.status(200).json(Users))
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
exports.userLogin=(req,res,next)=>{
       
        Users.findOne(
                {mail:req.body.mail})
        .then((user)=>{
                if (user==null) {
                        const user=new Users(
                                {...req.body}
                        )
                        user.save()
                        .then((user)=>res.status(201).json(user))
                        .catch((error)=>res.status(400).json({error}));
                } else {
                        res.status(200).json(user)
                }
        }) 
        .catch((error)=>res.status(400).json({error}));       
}