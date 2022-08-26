const express = require('express')
const router = express.Router()
const authController = require('../controller/auth.controller')

 const auth = require('../middleware/auth')
 const admin = require('../middleware/admin')

//------ Register User ------//
router.post('/register',authController.userRegister)

//------- Login User ---------//

router.post('/login',authController.userLogin)

router.get('/welcome',auth,(req,res)=>{
    res.status(200).send("welcome user 👏")
})

router.get('/welcome',admin,(req,res)=>{
    res.status(200).send("welcome user 👏")
})

module.exports = router;