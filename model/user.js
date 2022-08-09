const mongoose = require('mongoose')
const rolesData = require('../config/roles')


const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:[rolesData.roles.admin,rolesData.roles.user],
        default:rolesData .roles.user
    },
    token:{
        type:String
    }
})

module.exports = mongoose.model('user',userSchema)