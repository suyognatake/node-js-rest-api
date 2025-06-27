const mongoose = require('mongoose');

const vechicleSchema = new mongoose.Schema({
  driverName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver'
  },
  vehicleNumber: {
    type: String,
    required: true
  },
  plantName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plant'
  },
  capacity: {
    type: Number,
    required: true
  },
  transporterCode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transporter'
  },
  transporterName: {
    type: String,
    required: true
  },
  rcIssueDate: {
    type: Date,
    required: true
  },
  vechicleManufacturedBy: {
    type: String,
    required: true
  },
  manufacturedMonth: {
    type: String,
    required: true
  },
  manufacturedyYear: {
    type: String,
    required: true
  },
  selectedVehicleDedication: {
    type: String,
    required: true
  },
  vehicleStatus: {
    type: Boolean,
    required: true
  },
  rfidFastTag: {
    type: String,
    required: true
  },
  movementTag: {
    type: String,
    required: true
  },
  vehicleType: {
    type: String,
    required: true
  },
  permitNo: {
    type: String,
    required: true
  },
  permitType: {
    type: String,
    required: true
  },
  roadTaxRenewalDate: {
    type: Date,
    required: true
  },
  pucIssueDate: {
    type: Date,
    required: true
  },
  pucExpiryDate: {
    type: Date,
    required: true
  },
  fitnessExpiryDate: {
    type: Date,
    required: true
  },
  insuranceNo: {
    type: String,
    required: true
  },
  insuranceCompanyName: {
    type: String,
    required: true
  },
  insuranceIssueDate: {
    type: Date,
    required: true
  },
  insuranceExpiryDate: {
    type: Date,
    required: true
  },
  vehicleExpiryDate: {
    type: Date,
    required: true
  },
  nameTitle: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: true
  },
  surName: {
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
  pincode: {
    type: String,
    required: true
  },
  licenseNo: {
    type: String,
    required: true
  },
  licenseExpiryDate: {
    type: Date,
    required: true
  },
  mobileNo: {
    type: Number,
    required: true
  },
  ownerImage: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Vehicle', vechicleSchema)