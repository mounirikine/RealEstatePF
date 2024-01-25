import express  from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createReal, deleteReal, getReal, updateReal } from "../Controllers/Real.controller.js";
const router = express.Router();




<<<<<<< HEAD
router.post('/create-real',verifyToken ,createReal) 

=======
router.post('/create-real',verifyToken ,createReal)
router.delete('/delete-real/:id',verifyToken ,deleteReal)
router.post('/update-real/:id',verifyToken ,updateReal)
router.get('/get-real/:id', getReal);
>>>>>>> 9668db47b683561cec27abd6e10cc70559033bf0

export default router;