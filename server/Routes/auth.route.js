import express from 'express'
import { SignIn, SignUp, UpdateUser,  signOut, userInfo } from '../Controllers/auth.controller.js';
import { verifyToken } from '../utils/verifyUser.js';



const router = express.Router()

router.post('/sign-up',SignUp)
router.post('/sign-in',SignIn)
router.get("/signout",signOut);
router.get("/userInfo",userInfo);
router.put('/users/:userId',verifyToken, UpdateUser);

export default router;