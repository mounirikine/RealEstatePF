import Other from "../Models/Other.model.js";


export const createProduct = async(req,res,next)=>{
    try {
      const userId = req.body.userRef; // Assuming the authenticated user's ID is available in req.user
      const otherData = {
        ...req.body,
        userRef: userId // Set the userRef field to the authenticated user's ID
      };
        const listing = Other.create(otherData);
        return res.status(201).json("Product has ben created successfully");
    } catch (error) {
        next(error)
    }
}
export const getProduct = async (req, res, next) => {
    try {
      const Product = await Other.findById(req.params.id);
      if (!Product) {
        return next(errorHandler(404, 'Product not found!'));
      }
      res.status(200).json(Product);
    } catch (error) {
      next(error);
    }
  };

  export const getProducts = async (req, res, next) => {
    try {
        
            const Products = await Other.find();
            if (!Products || Products.length === 0) {
                return next(errorHandler(404, 'Products not found!'));
            }
            res.status(200).json(Products);
       
           
    } catch (error) {
        next(error);
    }
};

export const deleteProduct = async(req,res,next)=>{
    const Product = await Other.findById(req.params.id);
  if(!Product){
     return next(errorHandler(404,'Product not found1'));
  }
  if(req.user.id !== Product.userRef){
    return next(errorHandler(401,'You can only delete your own Product!'));
  }
  try {
  
     await Other.findByIdAndDelete(req.params.id);
  res.status(200).json('Product has been deleleted!')
  } catch (error) {
     next(error);
  }
  }
  
  export const updateProduct = async (req, res, next) => {
    const Product = await Other.findById(req.params.id);
    if (!Product) {
      return next(errorHandler(404, 'Product not found!'));
    }
   
    try {
      const updatedProduct = await Other.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }  
      );
      res.status(200).json(updatedProduct);
    } catch (error) {
      next(error);
    }
  };
  