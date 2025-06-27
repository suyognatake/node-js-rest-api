const express = require('express');
const router = express.Router();

const { addUom, getAllUom, updateUOM, deleteUOM } = require('../../controller/master/UomMasterController');

router.post('/addUom', addUom);
router.get('/getAllUom', getAllUom);
router.put('/updateUOM/:id', updateUOM);
router.delete('/deleteUOM/:id', deleteUOM);


module.exports = router;