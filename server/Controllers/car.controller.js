import Car from "../Models/Car.model.js";







export const createCar = async(req,res,next)=>{
    try {
        const listing = Car.create(req.body);
        return res.status(201).json("Car has ben created successfully");
    } catch (error) {
        next(error)
    }
}

export const getCar = async (req, res, next) => {
    try {
      const listing = await Car.findById(req.params.id);
      if (!listing) {
        return next(errorHandler(404, 'Car not found!'));
      }
      res.status(200).json(listing);
    } catch (error) {
      next(error);
    }
  };


  export const getCars = async (req, res, next) => {
    try {
        
            const listing = await Car.find();
            if (!listing || listing.length === 0) {
                return next(errorHandler(404, 'Cars not found!'));
            }
            res.status(200).json(listing);
       
           
    } catch (error) {
        next(error);
    }
};


export const deleteCar = async(req,res,next)=>{
  const listing = await Car.findById(req.params.id);
if(!listing){
   return next(errorHandler(404,'Real not found1'));
}
if(req.user.id !== listing.userRef){
  return next(errorHandler(401,'You can only delete your own car!'));
}
try {

   await Car.findByIdAndDelete(req.params.id);
res.status(200).json('listings has been deleleted!')
} catch (error) {
   next(error);
}
}

