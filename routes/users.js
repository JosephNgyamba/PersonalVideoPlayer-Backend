const express=require('express');
const userRoute=express.Router();
const userCtrl=require('../controlers/userControlers')

userRoute.post('/',userCtrl.createUser);
userRoute.put('/',userCtrl.updateUser);
userRoute.delete('/',userCtrl.deleteUser);
// userRoute.get('/',userCtrl.getUser);

module.exports=userRoute;