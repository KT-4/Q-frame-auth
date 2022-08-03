require('dotenv').config();
require('./config/db').connect();

const express = require('express')
const app = express();
const { API_PORT } = process.env;

const router = require('./routes/routes')


app.use(express.json())
app.use('/',router)

const port = process.env.port || API_PORT

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})



module.exports = app