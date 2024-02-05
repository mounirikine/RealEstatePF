import express  from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createCar, deleteCar, getCar, getCars } from "../Controllers/car.controller.js";

const router = express.Router();



router.post('/create-car',verifyToken ,createCar)
router.delete('/delete-car/:id',verifyToken ,deleteCar)
router.get('/get-car/:id', getCar);
router.get('/Cars', getCars);
export default router;