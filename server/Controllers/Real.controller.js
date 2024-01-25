
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