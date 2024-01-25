
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

