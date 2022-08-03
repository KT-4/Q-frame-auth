
const mongoose = require('mongoose')


exports.connect = () => {
  
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('successfully connection')
    }).catch((err)=>{
        console.log(`server connection error ${err}`)
    })
    
}


