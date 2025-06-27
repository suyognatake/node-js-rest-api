const express = require('express');
const router = express.Router();

const { addMaterial, getAllMaterial, updateMaterial, deleteMaterial } = require('../../controller/master/MaterialMasterController');

router.post('/addMaterial', addMaterial);
router.get('/getAllMaterial', getAllMaterial);
router.put('/updateMaterial/:id', updateMaterial);
router.delete('/deleteMaterial/:id', deleteMaterial);

module.exports = router;