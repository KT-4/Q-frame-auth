const express = require('express')
const router = express.Router()
const authController = require('../controller/auth.controller')
const logAuth = require('../controller/logauth.controller')

const auth = require('../middleware/auth')

router.post('/register',authController.userRegister)
router.post('/login',logAuth.logController)

//midleware auth.js

router.post('/welcome',auth,(req,res)=>{
    res.status(200).send('welcome...')
})

module.exports = router