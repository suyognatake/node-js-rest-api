const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  nameTitle: {
    type: String,
    required: true
  },
  driverName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  addressLine1: {
    type: String,
    required: true
  },
  addressLine2: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  pinCode: {
    type: Number,
    required: true
  },
  licenseNo: {
    type: Number,
    required: true
  },
  licenseExpiryDate: {
    type: Date,
    required: true
  },
  mobileNumber: {
    type: Number,
    required: true
  },
  staffImage: {
    type: String,
    required: true
  },
  isStatus: {
    type: Boolean,
    default: true
  }
});
module.exports = mongoose.model('Driver', driverSchema);