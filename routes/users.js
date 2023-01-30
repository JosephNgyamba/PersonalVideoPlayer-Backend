const express=require('express');
const userRoute=express.Router();
const userCtrl=require('../controlers/usersControlers')

userRoute.post('/post',userCtrl.createUser);
userRoute.post('/login',userCtrl.userLogin)
userRoute.put('/put',userCtrl.updateUser);
userRoute.delete('/delete',userCtrl.deleteUser);
userRoute.get('/get',userCtrl.getUsers);

module.exports=userRoute;