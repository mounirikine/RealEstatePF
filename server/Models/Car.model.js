import mongoose from 'mongoose';

const carSchema = new mongoose.Schema(
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference the User model
    required: true
},
  body: {
    type: String,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  fueltype: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  drivetype: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  vin: {
    type: String,
    required: true,
  },
  AirConditioner: {
    type: Boolean,
    required: false,
  },
  DigitalOdometer: {
    type: Boolean,
    required: false,
  },
  Heater: {
    type: Boolean,
    required: false,
  },
  LeatherSeats: {
    type: Boolean,
    required: false,
  },
  PanoramicMoonroof: {
    type: Boolean,
    required: false,
  },
  Tachometer: {
    type: Boolean,
    required: false,
  },
  TouchscreenDisplay: {
    type: Boolean,
    required: false,
  },
  AntiLockBraking: {
    type: Boolean,
    required: false,
  },
  BrakeAssist: {
    type: Boolean,
    required: false,
  },
  ChildSafetyLocks: {
    type: Boolean,
    required: false,
  },
  DriverAirBag: {
    type: Boolean,
    required: false,
  },
  PowerDoorLocks: {
    type: Boolean,
    required: false,
  },
  StabilityControl: {
    type: Boolean,
    required: false,
  },
  TractionControl: {
    type: Boolean,
    required: false,
  },
  FogLightsFront: {
    type: Boolean,
    required: false,
  },
  RainSensingWiper: {
    type: Boolean,
    required: false,
  },
  RearSpoiler: {
    type: Boolean,
    required: false,
  },
  WindowsElectric: {
    type: Boolean,
    required: false,
  },
  AndroidAuto: {
    type: Boolean,
    required: false,
  },
  AppleCarPlay: {
    type: Boolean,
    required: false,
  },
  Bluetooth: {
    type: Boolean,
    required: false,
  },
  HomeLink: {
    type: Boolean,
    required: false,
  },
  PowerSteering: {
    type: Boolean,
    required: false,
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array of user IDs who liked the property

 },
  { timestamps: true }
);

const Car = mongoose.model('Car', carSchema);

export default Car;