// const User = require('../model/user')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken');
// const mongoose  = require('mongoose');


// const logController = async (req,res)=>{
//     try{
//         const {email,password} = req.body;

//         if(!(email && password)){
//             res.status(400).send('All input are required...')
//         }

//         const user = await User.findOne({email})

//         if(user && (await bcrypt.compare(password,user.password))){
//             const token = jwt.sign({
//                 user_id:user._id,email
//             },process.env.TOKEN_KEY,{
//                expiresIn:'24h'
//             });
//             user.token = token;

//              res.status(200).send(user)

//         }else{
//             res.status(400).send('Invalid Credentials...') 
//         }
        
//     }catch(err){
//         console.log(err)
//         res.status(500).send(err)
//     }
// }

// module.exports = {logController}