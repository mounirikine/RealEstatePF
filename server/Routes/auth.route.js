import express from 'express'
import { forgotPass, SignIn, SignUp, UpdateUser,    signOut, userInfo, resetPass, ResetPass } from '../Controllers/auth.controller.js';
import { verifyToken } from '../utils/verifyUser.js';



const router = express.Router()

router.post('/sign-up',SignUp)
router.post('/sign-in',SignIn)
router.get("/signout",signOut);
router.get("/userInfo",userInfo);
router.put('/users/:userId', UpdateUser);
router.post('/forgot-password',forgotPass);//he will post rcupiration email
router.get('/reset-password/:id/:token',resetPass);
router.post('/reset-password/:id/:token',ResetPass);//he will post the new password
export default router;