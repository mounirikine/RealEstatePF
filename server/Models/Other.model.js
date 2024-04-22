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
      catSlug: {
        type: String,
        required: false,
    },
    country: {
      type: String,
      required: true,
  },
  city: {
      type: String,
      required: true,
  },
      userNumber: {
        type: String,
        required: false,
      },
      userRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference the User model
        required: true
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array of user IDs who liked the property

  },
  { timestamps: true }
);

const Other = mongoose.model('Other', otherSchema);

export default Other;