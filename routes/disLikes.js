const express=require('express');
const disLikeRouter=express.Router();
const disLikesCtrl=require('../controlers/likesControler');


 disLikeRouter.post('/post',disLikesCtrl.createLikes);
 disLikeRouter.get('/get',disLikesCtrl.getLikes);


module.exports=disLikeRouter;