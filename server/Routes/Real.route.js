import express  from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createReal, deleteReal } from "../Controllers/Real.controller.js";
const router = express.Router();




router.post('/create-real',verifyToken ,createReal)
router.delete('/delete-real/:id',verifyToken ,deleteReal)

export default router;