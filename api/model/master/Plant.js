const mongoose = require('mongoose');
const plantSchema = new mongoose.Schema({

  plantName: {
    type: String,
    required: true
  },
  plantId: {
    type: Number,
    required: true
  },
  tripSequence: {
    type: String,
    required: true
  },
  plantDescription: {
    type: String,
    minlength: 10,
    maxlength: 300
  },
  isStatus: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Plant', plantSchema);