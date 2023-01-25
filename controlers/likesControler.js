const likes=require('../model/modelLikes');

exports.createLikes=(req,res)=>{
    const userLike=new likes({
        ...req.body
    });
    userLike.save()
     .then(()=>res.status(201).json({message:'like ajouté'}))
     .catch(error=>res.status(400).json({error}))
}
exports.getLikes=(req,res)=>{
    likes.find()
    .then(likes=>res.status(200).json(likes))
    .catch(error=>res.status(400).json({error}))
}