const mongoose = require('mongoose');

const unLoaderSchema = new mongoose.Schema({
  unLoaderId: {
    type: String,
    required: true
  },
  unLoaderName: {
    type: String,
    required: true
  },
  unLoader: {
    type: String,
    required: true
  },
  queueLength: {
    type: Number,
    required: true
  },
  materialGroup: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MaterialGroup'
  }],
  isStatus: {
    type: Boolean,
    default: true
  }
});
module.exports = mongoose.model('UnLoader', unLoaderSchema);