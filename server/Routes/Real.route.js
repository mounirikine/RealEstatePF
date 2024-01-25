import express  from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createReal } from "../Controllers/Real.controller.js";
const router = express.Router();




router.post('/create-real',verifyToken ,createReal)


export default router;