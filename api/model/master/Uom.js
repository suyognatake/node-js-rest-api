const mongoose = require('mongoose');

const uomSchema = new mongoose.Schema({

  uomName: {
    type: String,
    required: true
  },
  uomCode: {
    type: String,
    required: true
  },
  tonnage: {
    type: Number,
    required: true
  },
  noOfBagsPerTon: {
    type: Number,
    required: true
  },
  isStatus: {
    type: Boolean,
    default: true
  }

});

module.exports = mongoose.model('Uom', uomSchema);