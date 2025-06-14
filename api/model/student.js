const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  phone: Number,
  gender: String,
  status: {
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model('Student', studentSchema);