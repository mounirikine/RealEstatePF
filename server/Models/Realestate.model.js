import mongoose from 'mongoose';
/**
 * @swagger
 * components:
 *   schemas:
 *     RealEstate:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         address:
 *           type: string
 *         regularPrice:
 *           type: number
 *         bathrooms:
 *           type: number
 *         rooms:
 *           type: number
 *         furnished:
 *           type: boolean
 *         parking:
 *           type: number
 *         garage:
 *           type: number
 *         parkSpace:
 *           type: number
 *         type:
 *           type: string
 *         catSlug:
 *           type: string
 *         country:
 *           type: string
 *         city:
 *           type: string
 *         state:
 *           type: string
 *         zip:
 *           type: string
 *         kitchen:
 *           type: number
 *         area:
 *           type: string
 *         imageUrls:
 *           type: array
 *           items:
 *             type: string
 *         userRef:
 *           type: string
 *         yearBuilt:
 *           type: number
 *         userNumber:
 *           type: string
 *         access_token:
 *           type: string   
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *   responses:
 *     NotFound:
 *       description: Resource not found
 *       content:
 *         application/json:    
 *           schema:
 *             $ref: '#/components/schemas/Error'
 *     InternalServerError:
 *       description: Internal server error
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 */

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
      likeCount: {
        type: Number,
        default: 0, // Default value is 0
      },
  },
  { timestamps: true }
);

const Real = mongoose.model('Real', RealestateSchema);

export default Real;