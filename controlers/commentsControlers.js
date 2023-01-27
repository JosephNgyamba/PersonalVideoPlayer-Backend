const Comments=require('../model/modelComments');



exports.createComment=(req,res,next)=>{
 try {
     console.log(req.body);
        const userComment=new Comments({
          ...req.body
     });
     userComment.save()
     .then(()=>res.status(200).json({message:'commentaire créé'}))
     .catch(error=>res.status(400).json({error}))
 } catch (error) {
     res.status(500).json({message:"Something wrong"})
 }
  
}

exports.getAllComment=(req,res,next)=>{
     Comments.find()
     .then(Comments=>res.status(201).json(Comments))
     .catch(error=>res.status(400).json({error}))
}

// exports.getOneComment=(req,res,next)=>{
//   Comments.findOne({_id:req.params.id},{...req.body, _id:req.params.id})
//   .then(()=>res.status(200).json(Comments))
//   .catch(error=>res.status(400).json({error}))
// }


exports.deleteComment=(req,res,next)=>{
  Comments.deleteOne({_id:req.params.id},{...req.body, _id:req.params.id})
  .then(()=>res.status(200).json({message:'commentaire supprimé'}))
  .catch(error=>res.status(400).json({error}))
}

// logique coté users

