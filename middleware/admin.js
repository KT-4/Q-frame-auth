

   const verify = (req,res,next)=>{
    const user = req;
    if(user && user.role === 'Admin'){
      next();
    }else{
        res.status(403).json({message:'error admin'})
    }

}

module.exports = verify
