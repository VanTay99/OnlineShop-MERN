const express=require('express');
const router = express.Router();
const {validateSignupRequest,isRequestValidated,validateSigninRequest} =require('../../validators/auth')
const {signup,signin} = require('../../controller/admin/auth');



router.post('/admin/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/admin/signin',validateSigninRequest,isRequestValidated,signin);

// router.post('/profile',requireSignin,(req,res)=>{
//     res.status(200).json({user:'profile'})
// });

module.exports=router;