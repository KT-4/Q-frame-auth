const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization']?req.headers['authorization'].split(' ')[1]:''

    if(!token){
        return res.status(403).send("A token is required for authentication")
    }
    try{
       const decode = jwt.verify(token,process.env.TOKEN_KEY)
       req.user = decode
    }catch(err){
        return res.status(401).send('Invalid Token...')
    }
    return next()
};

module.exports = verifyToken