import express  from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createProduct, deleteProduct, getProduct, getProducts, togglePostLike, updateProduct } from "../Controllers/other.controller.js";


const router = express.Router();
router.post('/create-other',verifyToken ,createProduct)
router.delete('/delete-other/:id',verifyToken ,deleteProduct)
router.get('/get-other/:id', getProduct);
router.get('/Others', getProducts);
router.post('/update-other/:id',verifyToken ,updateProduct)
router.post('/toggle-like', verifyToken, togglePostLike);

export default router;