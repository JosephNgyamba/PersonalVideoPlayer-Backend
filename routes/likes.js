const express=require('express');
const likeRouter=express.Router();
const likesCtrl=require('../controlers/likesControler');


likeRouter.post('/post',likesCtrl.createLikes);
likeRouter.get('/get',likesCtrl.getLikes);


module.exports=likeRouter;