const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const mongoose  = require('mongoose');

const userRegister = async (req,res)=>{
    try{
        const {first_name,last_name,email,password} = req.body;   
 
 
        if(!(first_name && last_name && email && password)){
           res.status(400).send('All user input is required')
        }
 
        const oldUser = await User.findOne({email})
 
        if(oldUser){
           return res.status(409).send('User Alredy Exist please login')
        }
      
       encryptedPassword = await bcrypt.hash(password,10)
 
 
       const user = await User.create({
         first_name,
         last_name,
         email:email.toLowerCase(),
         password:encryptedPassword
       })
 
 
       const token = jwt.sign({
         user_id:user._id, email },process.env.TOKEN_KEY,{
             expiresIn:"2h",
         })
         user.token = token
         res.status(201).json(user)
 
     }catch(err){
         console.log(err)
     }
 
}


module.exports = {userRegister}