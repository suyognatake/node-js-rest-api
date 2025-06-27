const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./api/routes/auth/AuthRoute');
const plantRoute = require('./api/routes/master/PlantMasterRoute');
const uomRoute = require('./api/routes/master/UomMasterRoute');
const roleRoute = require('./api/routes/role/RoleRoute');
const materialRoute = require('./api/routes/master/MaterialMasterRoute');
const packerRoute = require('./api/routes/master/PackerRoute');
const loaderRoute = require('./api/routes/master/LoaderRoute');
const materialGroupRoute = require('./api/routes/master/MaterialGroupRoute');
const unLoaderRoute = require('./api/routes/master/UnLoaderRoute');
const driverRoute = require('./api/routes/master/DriverRoute');
const transporterRoute = require('./api/routes/master/TransporterRoute');
const vehicleRoute = require('./api/routes/master/VehicleRoute');
const preDoRoute = require('./api/routes/pre-do/PreDoRoute');
const Order = require('./api/model/orders/Order');
const connectDB = require('./api/config/db');

connectDB();

// const orderData = {
//   "preDoId": 2,
//   "orderNumber": 12346,
//   "orderQuantity": 100,
//   "remainingQty": 110,
//   "status": "Pending",
//   "loadingCategory": "Heavy",
//   "orderFreight": 500,
//   "customerCode": 9877,
//   "distributionChannel": 1023,
//   "createdBy": "admin_user",
//   "assignTime": "08:35 AM",
//   "shipCondition": 1124,
//   "isActive": "Y",
//   "isDeleted": "N"
// };

// const addOrder = async () => {
//   try {
//     const newOrder = new Order(orderData);
//     const savedOrder = await newOrder.save();
//     console.log('Order saved:', savedOrder);
//     mongoose.disconnect();
//   } catch (err) {
//     console.error('Error saving order:', err);
//     mongoose.disconnect();
//   }
// };

// addOrder();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoute);
app.use('/plant', plantRoute);
app.use('/uom', uomRoute);
app.use('/role', roleRoute);
app.use('/material', materialRoute);
app.use('/packer', packerRoute);
app.use('/loader', loaderRoute);
app.use('/materialGroup', materialGroupRoute);
app.use('/unLoaderRoute', unLoaderRoute);
app.use('/driver', driverRoute);
app.use('/transporter', transporterRoute);
app.use('/vehivle', vehicleRoute);
app.use('/preDo', preDoRoute);

app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    msg: 'Bad Request!!!'
  })
})

module.exports = app;