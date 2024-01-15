import express from 'express'
import { SignUp } from '../Controllers/auth.controller.js';



const router = express.Router()


router.post('/sign-up',SignUp)

export default router;