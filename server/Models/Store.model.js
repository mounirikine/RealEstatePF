import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
      },
      BrandImg: {
        type: Array ,
        required: false,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      },
     
      description: {
        type: String,
        required: true,
      },
      userName: {
        type: String,
        required: false,
      },
      email: {
        type: String,
        required: true,
      },
      userNumber: {
        type: String,
        required: false,
      },
      userRef: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

const Store = mongoose.model('Store', storeSchema);

export default Store;