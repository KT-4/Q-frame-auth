const mongoose = require('mongoose')

const TokenSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'

    },
    token:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:60000
    }
})

module.exports = mongoose.model('token',TokenSchema)