const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/upload');

const { addVehicle, getAllVehicleData, deleteVehicle } = require('../../controller/master/VehicleController');

router.post('/addVehicle', upload.single('ownerImage'), addVehicle);
router.get('/getAllVehicleData', getAllVehicleData);
router.delete('/deleteVehicle/:id', deleteVehicle);


module.exports = router;