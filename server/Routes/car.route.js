import express  from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createCar, getCar, getCars } from "../Controllers/car.controller.js";

const router = express.Router();



router.post('/create-car',verifyToken ,createCar)

router.get('/get-car/:id', getCar);
router.get('/Cars', getCars);
export default router;