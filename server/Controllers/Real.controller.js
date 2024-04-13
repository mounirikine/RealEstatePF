
import Car from "../Models/Car.model.js";
import Real from "../Models/Realestate.model.js";
import { errorHandler } from "../utils/error.js";
/**
 * @swagger
 * tags:
 *   name: Real
 *   description: Operations related to Real Estate listings
 */

/**
 * @swagger
 * /api/real:
 *   post:
 *     summary: Create a new real estate listing
 *     tags: [Real]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Define your request body properties here
 *     responses:
 *       '201':
 *         description: Successfully created a new real estate listing
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               // Define your response schema here
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
export const createReal = async (req, res, next) => {
  try {
    const userId = req.body.userRef; // Assuming the authenticated user's ID is available in req.user
    const realData = {
      ...req.body,
      userRef: userId // Set the userRef field to the authenticated user's ID
    };
    const real = await Real.create(realData);
    res.status(201).json(real);
  } catch (error) {
    next(error);
  }
};


export const deleteReal = async(req,res,next)=>{
    const listing = await Real.findById(req.params.id);
 if(!listing){
     return next(errorHandler(404,'Real not found1'));
 }

 try {
 
     await Real.findByIdAndDelete(req.params.id);
 res.status(200).json('listings has been deleleted!')
 } catch (error) {
     next(error);
 }
 }


 export const updateReal = async (req, res, next) => {
    const listing = await Real.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, 'Real not found!'));
    }
   
  
    try {
      const updatedListing = await Real.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedListing);
    } catch (error) {
      next(error);
    }
  };

  export const getReal = async (req, res, next) => {
    try {
      const listing = await Real.findById(req.params.id);
      if (!listing) {
        return next(errorHandler(404, 'Real not found!'));
      }
      res.status(200).json(listing);
    } catch (error) {
      next(error);
    }
  };
  export const getRealEstats = async (req, res, next) => {
    try {
      let catSlug = req.query.catSlug;

      if (catSlug !== undefined) {
          let listings;
          if (catSlug !== 'car') {
              listings = await Real.find({ catSlug }).populate('userRef', 'avatar');
              if (!listings || listings.length === 0) {
                  return next(errorHandler(404, 'Reals not found!'));
              }
          } else if (catSlug === 'car') {
              listings = await Car.find({ catSlug }).populate('userRef', 'avatar');
              if (!listings || listings.length === 0) {
                  return next(errorHandler(404, 'Cars not found!'));
              }
          }
          res.status(200).json(listings);
      }
  } catch (error) {
      next(error);
  }
};


export const getListings = async (req, res, next) => {
  const userId = req.params.id; 
  try {
 

    // Find all cars with the specified userId
    const cars = await Car.find({ userRef: userId });

    // Find all reals with the specified userId
    const reals = await Real.find({ userRef: userId });

    // Combine the results into a single object
    const allListings = { cars, reals };

    // If both cars and reals arrays are empty, return a 404 error
    if (!cars.length && !reals.length) {
      return next(errorHandler(404, 'Listings not found!'));
    }

    // Return the combined listings
    res.status(200).json(allListings);
 
  } catch (error) {
    next(error);
  }
};


export const getForUpdating = async (req, res, next) => {
  try {
    const listing = await Real.findById(req.params.id);
    const listing2 = await Car.findById(req.params.id);

    
   
    res.status(200).json({listing,listing2});
  } catch (error) {
    next(error);
  }
};

export const getListingsby = async (req, res, next) => {
  let { country, catSlug, minPrice, maxPrice } = req.query;

  // Check if parameters are empty, if so, set them to null
  country = country || null;
  catSlug = catSlug || null;
  minPrice = minPrice || null;
  maxPrice = maxPrice || null;

  try {
    let cars, reals;

    // If any of the parameters are empty, fetch all cars and reals
    if (country || catSlug || minPrice || maxPrice) {
     
      cars = await Car.find({
        $or: [
          { country },
          { catSlug },
          { price: { $gte: minPrice, $lte: maxPrice } }
        ]
      });

      // Find reals within the specified country, catSlug, and price range
      reals = await Real.find({
        $or: [
          { country },
          { catSlug },
          { regularPrice: { $gte: minPrice, $lte: maxPrice } }
        ]
      });
    } else {
      // Find cars within the specified country, catSlug, and price range
      cars = await Car.find();
      reals = await Real.find();
    }
    // Combine the results into a single object
     const allListings = { cars, reals };

    // If both cars and reals arrays are empty, return a 404 error
    if (!cars.length && !reals.length) {
      return next(errorHandler(404, 'Listings not found!'));
    }

    // Return the combined listings
    res.status(200).json(allListings);
  } catch (error) {
    next(error);
  }
};
