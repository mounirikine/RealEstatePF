import express  from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createStore, getStore, getStores } from "../Controllers/store.controller.js";





const router = express.Router();
router.post('/create-store',verifyToken ,createStore)
router.get('/get-store/:id', getStore);
router.get('/Stores', getStores);

export default router;