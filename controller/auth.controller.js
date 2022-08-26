const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Token = require('../model/token')
const crypto = require('crypto')

const userRegister = async (req,res)=>{
    try{
        const {first_name,last_name,email,password,role} = req.body;   
 
 
        if(!(first_name && last_name && email && password)){
           res.status(400).send('All user input is required')
        }
 
        const chekUser = await User.findOne({email})
 
        if(chekUser){
           return res.status(409).send('User Alredy Exist please login')
        }
      
       encryptedPassword = await bcrypt.hash(password,10)
 
 
       const user = await User.create({
         first_name,
         last_name,
         email:email.toLowerCase(),
         role,
         password:encryptedPassword
       })
 
        //*********** CREATE TOKEN ****************/ 

       const token = jwt.sign({user_id:user._id, email,role:role},process.env.TOKEN_KEY,{
             expiresIn:"24h",
         })
         user.token = token;
          res.status(201).json({message:"",user});
 
     }catch(err){
          console.log(err)
           res.status(500).json(err)
  }
 
}

        //******** LOGIN IN USER ************//   

const userLogin = async (req,res)=>{
   try{
       const {email,password} = req.body;

       if(!(email && password)){
           res.status(400).send('All input are required...')
       }

       const user = await User.findOne({email})

       if(user && (await bcrypt.compare(password,user.password))){
           const token = jwt.sign({
               user_id:user._id,email,role:user.role
           },process.env.TOKEN_KEY,{
              expiresIn:'24h'
           });
           user.token = token;

            res.status(200).send(user)

       }else{
           res.status(401).send('Invalid Credentials...') 
       }
       
   }catch(err){
       console.log(err)
       res.status(500).send(err)
   }
}



module.exports = {userRegister,userLogin}