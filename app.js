require('dotenv').config();
require('./config/db').connect();
const cors = require('cors')

const express = require('express')
const app = express();
const { API_PORT } = process.env;

const router = require('./routes/routes')


app.use(express.json())
app.use(cors());

app.use(express.urlencoded({extended:true}))

// routes
app.use('/',router)


const port = process.env.port || API_PORT

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})



module.exports = app