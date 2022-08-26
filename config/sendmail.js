const nodemailer = require('nodemailer');

const sendEmail = async(email,subject,text)=>{
    try{
       const transporter = nodemailer.createTransport({
         host:process.env.USER,
         service:process.env.SERVICE,
         port:587,
         secure:true,
         auth:{
            user:process.env.USER,
            pass:process.env.PASS
         }
       })
       await transporter.sendMail({
         from:process.env.USER,
         to:email,
         subject:subject,
       })
       console.log('email sent successfully...')
    }catch(err){
        console.log("email is not send")
    }
}