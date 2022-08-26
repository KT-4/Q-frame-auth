
require('dotenv').config()
require('./config/db')

const express = require('express');
const app = express();
const cors = require('cors')
const logger = require('morgan')
const router = require('./routes/index.route')
// const auth = require('./middleware/auth')
// const admin = require('./middleware/admin')


const port = process.env.PORT || 3000;

//******* middleware ***** //
app.use(cors());
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//******* routes ******* //
 app.use('/',router)

// **** call welcome user **** //
//  app.post('/welcome',auth,(req,res)=>{
//     res.send("Welcome User 👏")
//  });


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})



module.exports = app