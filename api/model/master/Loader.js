const mongoose = require('mongoose');

const loaderSchema = new mongoose.Schema({
  loaderName: {
    type: String,
    required: true
  },
  loaderId: {
    type: String,
    required: true
  },
  loaderDescription: {
    type: String,
    required: true
  },
  queueLength: {
    type: Number,
    required: true
  },
  isStatus: {
    type: Boolean,
    default: true
  },
  packer: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Packer'
  }],
}, {
  timestamps: true
});


module.exports = mongoose.model('Loader', loaderSchema);