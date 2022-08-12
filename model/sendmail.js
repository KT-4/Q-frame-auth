const nodemailer = require('nodemailer');


const sendemail = async (email,subject,text) => {
    try{
        const transporter = nodemailer.createTransport({
            host:process.env.host,
            service:process.env.service,
            port:587,
            secure:true,
            auth:{
                user:process.env.user,
                pass:process.env.pass
            },
        });

        await transporter.sendemail({

            from:process.env.user,
            to:'kashyap.qtonz@yahoo.com',
            subject:'send nodejs test mail',
            text:'hello kashyap how are you !'

        })

        console.log('Email sent successfully....')
    }catch(error){
        console.log(`Email not sent successfully ${error}`)
    }
}


module.exports = {sendemail}