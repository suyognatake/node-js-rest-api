const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  phone: Number,
  gender: String,
  department: String,
  age: Number,
  salary: Number,
  status: {
    type: Boolean,
    default: true
  }
});
module.exports = mongoose.model('Teacher', teacherSchema);