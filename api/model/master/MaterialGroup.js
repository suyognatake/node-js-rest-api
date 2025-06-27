const mongoose = require('mongoose');

const materialGroupSchema = new mongoose.Schema({
  materialGroupCode: {
    type: String,
    required: true
  },
  materialGroupName: {
    type: String,
    required: true
  },
  materialGroupDescription: {
    type: String,
    required: true
  },
  isStatus: {
    type: Boolean,
    default: true
  }
});


module.exports = mongoose.model('MaterialGroup', materialGroupSchema);