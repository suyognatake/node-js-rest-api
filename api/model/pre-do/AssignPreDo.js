const mongoose = require('mongoose');

const assignPreDoSchema = new mongoose.Schema({
  preDoNo: { type: Number, required: true },
  preDoId: { type: Number, required: true },
  transporterShipmentNo: { type: String, default: "NA" },
  transporterOrderStatus: { type: String, default: "NA" },
  transporterName: { type: String, required: true },
  transporterCode: { type: String, required: true },
  subOrdNo: { type: String, required: true },
  quantity: { type: Number, required: true },
  plantId: { type: Number, required: true },
  orderStatus: { type: String, required: true },
  ordNo: { type: Number, required: true },
  loadingCategory: { type: Number, required: true },
  editQuantity: { type: Number, required: true },
  driverId: { type: Number, required: true },
  allocatedDateTime: { type: Date },
  updatedBy: { type: String, required: true },
  createdBy: { type: String, required: true }
},
  {




    timestamps: true
  });

module.exports = mongoose.model('AssignPreDo', assignPreDoSchema);