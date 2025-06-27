const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  materialCode: {
    type: String,
    required: true
  },
  gradeCode: {
    type: String,
    required: true
  },
  materialName: {
    type: String,
    required: true
  },
  gradeDescription: {
    type: String,
    required: true
  },
  brandCode: {
    type: String,
    required: true
  },
  brandDescription: {
    type: String,
    required: true
  },
  materialGroup: {
    type: String,
    required: true
  },
  packDescription: {
    type: String,
    required: true
  },
  packType: {
    type: String,
    required: true
  },
  materialDescription: {
    type: String,
    required: true
  },
  weightPerBags: {
    type: Number,
    required: true
  },
  isStatus: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Material', materialSchema);
