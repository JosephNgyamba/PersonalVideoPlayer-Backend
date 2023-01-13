const express=require('express');
const userCtrl=require('../controlers/commentControlers')
const commentRoute=express.Router();

commentRoute.post('/post',userCtrl.createComment);
commentRoute.get('/get',userCtrl.getComment);
commentRoute.delete('/delete',userCtrl.deleteComment);

module.exports=commentRoute;