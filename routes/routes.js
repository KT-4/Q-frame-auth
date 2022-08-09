const express = require('express')
const router = express.Router()
const authController = require('../controller/auth.controller')
const logAuth = require('../controller/logauth.controller')
const userControll = require('../controller/user.Controller')
const admincontroll = require('../controller/admin')

const auth = require('../middleware/auth')

router.post('/register',authController.userRegister)
router.post('/login',logAuth.logController)


//User controller routes

  router.get('/profile',userControll.userProfile)
  router.patch('/editprofile',userControll.editProfile)

//admin controller.js

     router.get('/admin',admincontroll.verify)

//midleware auth.js

router.post('/welcome',auth,(req,res)=>{
    res.status(200).send('welcome...')
})

module.exports = router