const express = require('express');
const router = express.Router();

const { addMaterialGroup, getAllMaterialGroup } = require('../../controller/master/MaterialGroupController');

router.post('/addMaterialGroup', addMaterialGroup);
router.get('/getAllMaterialGroup', getAllMaterialGroup);

module.exports = router;
