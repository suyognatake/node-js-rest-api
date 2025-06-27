const mongoose = require('mongoose');

const packerSchema = new mongoose.Schema({
  packerCode: {
    type: String,
    required: true
  },
  packerName: {
    type: String,
    required: true
  },
  packerDescription: {
    type: String,
    required: true
  },
  runningGrade: {
    type: String,
    required: true
  },
  material: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Material'
  }],
  isMrp: {
    type: Boolean,
    default: false
  },
  isStatus: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Packer', packerSchema);
