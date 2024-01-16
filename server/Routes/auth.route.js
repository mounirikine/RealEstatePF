import express from 'express'
import { SignIn, SignUp, google, signOut } from '../Controllers/auth.controller.js';



const router = express.Router()

router.post("/google",google);
router.post('/sign-up',SignUp)
router.post('/sign-in',SignIn)
router.get("/signout",signOut);
export default router;