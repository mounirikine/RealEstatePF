import express  from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createReal, deleteReal, getForUpdating, getListings, getListingsby, getReal, getRealEstats, togglePostLike, updateReal } from "../Controllers/Real.controller.js";
const router = express.Router();


// Swagger annotations for real routes
/**
 * @swagger
 * /api/real/create-real:
 *   post:
 *     summary: Create a new real estate listing
 *     tags: [Real]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RealEstate'
 *     responses:
 *       '201':
 *         description: Successfully created a new real estate listing
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RealEstate'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 *
 * /api/real/delete-real/{id}:
 *   delete:
 *     summary: Delete a real estate listing
 *     tags: [Real]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Real estate listing deleted successfully
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 *
 * /api/real/update-real/{id}:
 *   put:
 *     summary: Update a real estate listing
 *     tags: [Real]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RealEstate'
 *     responses:
 *       '200':
 *         description: Real estate listing updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RealEstate'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 *
 * /api/real/get-real/{id}:
 *   get:
 *     summary: Get a real estate listing
 *     tags: [Real]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Real estate listing retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RealEstate'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */




router.post('/create-real',verifyToken ,createReal)
router.delete('/delete-real/:id',verifyToken ,deleteReal)
router.post('/update-real/:id',verifyToken ,updateReal)
router.get('/get-real/:id', getReal);

router.get('/RealEstats', getRealEstats);

router.get('/Listingsby', getListingsby);
router.get("/sellerListing/:id",getListings )
router.get('/getForUpdate/:id', getForUpdating);
router.post('/toggle-like', verifyToken, togglePostLike);
export default router;