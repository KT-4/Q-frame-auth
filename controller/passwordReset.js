
const crypto = require('crypto')
const joi = require('joi');
const Token = require('../model/token');
const sendEmail = require('../model/sendmail')
const User = require('../model/user')


const resrtPass = async (req,res)=>{
    try{
       const user = User.findOne({emaii:req.body.emaii})
       if(!user)
            return res.status(400).send(" user with given email dosent' exist")

       let token = await Token.findOne({userId:user._id})
       if(!token){
         token = await new Token({
            userId:user._id,
            token:crypto.randomBytes(32).toString('hex'),
         }).save()
       }

       

    }catch(err){
        console.log(err)
    }
}