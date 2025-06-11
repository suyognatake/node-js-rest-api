const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  _id: mangoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  phone: Number,
  gender: String,
  age: Number,
  salary: Number,
  status: {
    type: Boolean,
    default: true
  }
});
module.exports = mongoose.model('Teacher', teacherSchema);