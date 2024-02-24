import Store from "../Models/Store.model.js";




export const createStore = async(req,res,next)=>{
    try {
        const listing = Store.create(req.body);
        return res.status(201).json("Store has ben created successfully");
    } catch (error) {
        next(error)
    }
}
export const getStore = async (req, res, next) => {
    try {
      const Store = await Store.findById(req.params.id);
      if (!Store) {
        return next(errorHandler(404, 'Store not found!'));
      }
      res.status(200).json(Store);
    } catch (error) {
      next(error);
    }
  };

  export const getStores = async (req, res, next) => {
    try {
        
            const Stores = await Store.find();
            if (!Stores || Stores.length === 0) {
                return next(errorHandler(404, 'Stores not found!'));
            }
            res.status(200).json(Stores);
       
           
    } catch (error) {
        next(error);
    }
};
