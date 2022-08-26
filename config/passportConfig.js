// const passport = require('passport')
// const localStrategy = require('passport-local').Strategy;
// const mongoose = require('mongoose');
// const user = require('../model/user');

// const User = mongoose.model('User')

// passport.use(new localStrategy({usernameField:'email'},
//    (email,password,done)=>{
//       User.findOne({email:email},
//         (err,user)=>{
//             if(err)
//                 return done(err);
//             //if unkonown user
//            else if(!user)
//                 return done(null,false,{message:'Email is not registered...'})

//            // if wrong password
//            else if(!user.verifyPassword(password))
//               return done(null,false,{message:'wrong Password....'})
//         })
//    }))