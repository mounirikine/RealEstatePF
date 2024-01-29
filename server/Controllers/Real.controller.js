
import Real from "../Models/Realestate.model.js";
import { errorHandler } from "../utils/error.js";




export const createReal = async(req,res,next)=>{
    try {
        const listing = Real.create(req.body);
        return res.status(201).json("Real has ben created successfully");
    } catch (error) {
        next(error)
    }
}


export const deleteReal = async(req,res,next)=>{
    const listing = await Real.findById(req.params.id);
 if(!listing){
     return next(errorHandler(404,'Real not found1'));
 }
 if(req.user.id !== listing.userRef){
     return next(errorHandler(401,'You can only delete your own Real!'));
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
    if (req.user.id !== listing.userRef) {
      return next(errorHandler(401, 'You can only update your own realestats!'));
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

        if (catSlug !== undefined ) {
            // If catSlug is provided and not equal to 'Homes'
            const listing = await Real.find({ catSlug });
            if (!listing || listing.length === 0) {
                return next(errorHandler(404, 'Reals not found!'));
            }
            res.status(200).json(listing);
        } else {
            // If catSlug is not provided or equal to 'Homes'
            const allListings = await Real.find();
            if (!allListings || allListings.length === 0) {
                return next(errorHandler(404, 'Reals not found!'));
            }
            res.status(200).json(allListings);
        }
    } catch (error) {
        next(error);
    }
};
