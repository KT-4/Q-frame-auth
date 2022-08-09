const nodemailer = require('nodemailer');

const sendMail = async(email,subject,text) =>{
    try{
        
           const transporter = nodemailer.createTransport({
            host:process.env.HOST,
            port:587,
            secure:true,

            auth:{
                user:'kashyap',
                password:'kashyap@123'
            }

        })

        await transporter.sendMail({
            from:'kashyap',
            to:email,
            subject:'test email',
            text:'hello'
        });
        console.log('email sent sucsessfully...')
    } catch(err){
        
    }
}