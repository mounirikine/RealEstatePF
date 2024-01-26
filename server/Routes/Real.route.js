import express  from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createReal, deleteReal, getReal, updateReal } from "../Controllers/Real.controller.js";
const router = express.Router();






router.post('/create-real',verifyToken ,createReal)
router.delete('/delete-real/:id',verifyToken ,deleteReal)
router.post('/update-real/:id',verifyToken ,updateReal)
router.get('/get-real/:id', getReal);


export default router;