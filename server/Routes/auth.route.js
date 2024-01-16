import express from 'express'
import { SignIn, SignUp, UpdateUser,  signOut } from '../Controllers/auth.controller.js';



const router = express.Router()

router.post('/sign-up',SignUp)
router.post('/sign-in',SignIn)
router.get("/signout",signOut);
router.get("/userInfo",userInfo);
router.put('/users/:userId', UpdateUser);

export default router;