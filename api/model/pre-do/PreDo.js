const mongoose = require('mongoose');

const preDoSchema = new mongoose.Schema({
  preDoId: { type: Number, required: true },
  orderNumber: { type: Number, required: true },
  orderQuantity: { type: Number, required: true },
  remainingQty: { type: Number, required: true },
  preDoQuantity: {
    type: Number,
    required: true
  },
  preDoNumber: {
    type: String,
    required: true
  },
  status: { type: String, required: true },
  loadingCategory: { type: String, required: true },
  orderFreight: { type: Number, required: true },
  customerCode: { type: Number, required: true },
  distributionChannel: { type: Number, required: true },
  createdBy: { type: String, required: true },
  assignTime: { type: String, required: true, match: /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i },
  shipCondition: { type: Number, required: true },
  isActive: { type: String, required: true, default: "Y" },
  isDeleted: { type: String, required: true, default: "N" },
  isStatus: {
    type: Boolean,
    default: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('PreDo', preDoSchema);