const express = require('express')
const router = express.Router()
const userController = require('../controller/user.Controller')
const auth = require('../middleware/auth')


//------ User Profile ------//

router.get('/profile',auth,userController.userProfile)

module.exports = router;