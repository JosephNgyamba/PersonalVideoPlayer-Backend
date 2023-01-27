const disLikes=require('../model/modelLikes');

exports.createLikes=(req,res)=>{
    const userDisLike=new disLikes({
        ...req.body
    });
    userDisLike.save()
     .then(()=>res.status(201).json({message:'like ajouté'}))
     .catch(error=>res.status(400).json({error}))
}
exports.getLikes=(req,res)=>{
    disLikes.find()
    .then(disLikes=>res.status(200).json(disLikes))
    .catch(error=>res.status(400).json({error}))
}