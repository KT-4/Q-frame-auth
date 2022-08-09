const User = require('../model/user')


const userProfile = async(req,res)=>{
     const _id = req.params.id
    try{
        const profile = await User.findById(_id)
            res.status(200).send(profile)
    }catch(err){
        res.status(500).send("User profile err "+err)
    }
};


const editProfile = async (req,res)=>{
    const _id = req.params.id
    try{
      const profile = await User.findByIdAndUpdate(_id)
        res.status(200).send(profile)
    }catch(err){
        res.status(500).send('edit profile error'+err)
    }
};



module.exports = {userProfile,editProfile}
