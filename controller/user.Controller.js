const User = require('../model/user')

        //********* FIND USERPROFILE *********//

const userProfile = async(req,res)=>{
    const _id = req.user.user_id;
    try{
     const profile = await User.findById({_id})
     res.status(200).send(profile)
    }catch(err){
        res.status(500).send(`User Profile error ${err}`)
    }
};

      //********* UPDATE USER PROFILE ***********//

const editProfile = async (req,res)=>{
    const _id = req.user.user_id;
    try{
      const _id = req.user.user_id;
      const profile = await User.findByIdAndUpdate(_id,{first_name:req.body.first_name,last_name:req.body.last_name})
        res.status(200).send(profile),{new:true}
    }catch(err){
        res.status(500).send(`edit profile error ${err}`)
    }
};



module.exports = {userProfile,editProfile}
