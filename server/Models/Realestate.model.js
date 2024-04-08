import mongoose from 'mongoose';

const RealestateSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: false,
    },
    rooms: {
      type: Number,
      required: true,
    },
    furnished: {
      type: Boolean,
      required: true,
    },
    parking: {
      type: Number,
      required: true,
    },
    garage: {
        type: Number,
        required: true,
      },
    parkSpace: {
        type: Number,
        required: false,
    },
    type: {
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
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: false,
    },
    kitchen: {
        type: Number,
        required: false,
    },

    area: {
        type: String,
        required: true,
      },
    imageUrls: {
      type: Array,
      required: false,
    },
    userRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference the User model
      required: true
  },yearBuilt: {
        type: Number,
        required: false,
      },
      userNumber: {
        type: String,
        required: false,
      },
  },
  { timestamps: true }
);

const Real = mongoose.model('Real', RealestateSchema);

export default Real;