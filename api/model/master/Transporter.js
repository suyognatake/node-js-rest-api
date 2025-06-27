const mongoose = require('mongoose');

const transporterSchema = new mongoose.Schema({
  transporterName: {
    type: String,
    required: true
  },
  transporterCode: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  mobileNo: {
    type: Number,
    required: true,
    unique: true
  },
  emailId: {
    type: String,
    required: true,
    unique: true
  },
  panNumber: {
    type: String,
    required: true
  },
  gstNumber: {
    type: String,
    required: true
  },
  lrSequence: {
    type: String,
    required: true
  },
  financialYear: {
    type: String,
    required: true
  },
  validFrom: {
    type: Date,
    required: true
  },
  validTo: {
    type: Date,
    required: true
  },
  isStatus: {
    type: Boolean,
    default: true
  }

});
module.exports = mongoose.model('Transporter', transporterSchema);