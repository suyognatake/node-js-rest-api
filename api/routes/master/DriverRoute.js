const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/upload');

const { addDriver, getAllDriver, deleteDriver, updateDriver } = require('../../controller/master/DriverController');

router.post('/addDriver', upload.single('staffImage'), addDriver);
router.get('/getAllDriver', getAllDriver);
router.put('/updateDriver/:id', updateDriver);
router.delete('/deleteDriver/:id', deleteDriver);

module.exports = router;