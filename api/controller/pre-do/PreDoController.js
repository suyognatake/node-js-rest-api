const mongoose = require('mongoose');
const PreDo = require('../../model/pre-do/PreDo');
const Order = require('../../model/orders/Order');


const savePreDo = async (req, res) => {
  try {
    const { orderNumber, preDoQuantity } = req.body;
    const order = await Order.findOne({ orderNumber });
    if (!order) {
      return res.status(404).json({
        message: "Order Not Found !!"
      });
    }
    if (order.remainingQty <= 0) {
      return res.status(400).json({
        message: "Order Completed Loaded not Quantity Left !!"
      });

    }
    const existingPreDoCount = await PreDo.countDocuments({ orderNumber });
    const number = `${orderNumber} - ${existingPreDoCount + 1}`;

    const predo = new PreDo({
      preDoId: order.preDoId,
      orderNumber,
      orderQuantity: order.orderQuantity,
      preDoQuantity,
      preDoNumber: number,
      remainingQty: order.remainingQty - preDoQuantity,
      status: "Open",
      loadingCategory: order.loadingCategory,
      orderFreight: order.orderFreight,
      customerCode: order.customerCode,
      distributionChannel: order.distributionChannel,
      createdBy: "superadmin",
      assignTime: order.assignTime,
      shipCondition: order.shipCondition,
      isActive: "Y",
      isDeleted: "N"
    });
    const savedPreDo = await predo.save();
    await Order.updateOne(
      { orderNumber },
      { $inc: { remainingQty: -preDoQuantity } }
    )
    res.status(201).json({
      status: 201,
      message: "PreDo created and Order updated successfully",
      preDo: savedPreDo
    });


  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}

const deletePreDo = async (req, res) => {
  try {

    const { id } = req.params;
    const { orderNumber } = req.body;
    const deletePreDo = await PreDo.findByIdAndDelete(id);
    await Order.updateOne(
      { orderNumber },
      { $inc: { remainingQty: +deletePreDo.preDoQuantity } }
    )
    res.status(200).json({
      status: 200,
      message: "Pre-Do Deleted Succesfully !!",
      data: deletePreDo
    })
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}

module.exports = {
  savePreDo,
  deletePreDo
}