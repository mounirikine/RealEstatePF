import mongoose from 'mongoose';

const otherSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
      },
      imageUrls: {
        type: Array,
        required: false,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
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

const Other = mongoose.model('Other', otherSchema);

export default Other;