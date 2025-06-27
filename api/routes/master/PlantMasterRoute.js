const express = require('express');
const router = express.Router();

const { addPlant, getAllPlant, updatePlant, deletePlant } = require('../../controller/master/PlantMasterController');

router.post('/addPlant', addPlant);
router.get('/getAllPlant', getAllPlant);
router.put('/updatePlant/:id', updatePlant);
router.delete('/deletePlant/:id', deletePlant);


module.exports = router;