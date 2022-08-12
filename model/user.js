const mongoose = require('mongoose')
const rolesData = require('../config/roles')


const userSchema = new mongoose.Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    phone:{
        type:Number
    },
    email:{
        type:String,
        trim:true
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:[rolesData.roles.admin,rolesData.roles.user],
        default:rolesData .roles.user
    },
    created:{
        type:Date,
        default:Date.now
    },
    token:{
        type:String
    }
})

module.exports = mongoose.model('user',userSchema)