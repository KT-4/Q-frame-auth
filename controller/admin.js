

   const verify = (req,res,next)=>{
    if(user && user.role === 'Admin'){
        next(0);
    }else{
        res.status(403).json({message:'error admin'})
    }

}

module.exports = {verify}
