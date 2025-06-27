const express = require('express');
const router = express.Router();


const { addPacker, getAllPacker, updatePacker, deletePacker } = require('../../controller/master/PackerController');

router.post('/addPacker', addPacker);
router.get('/getAllPacker', getAllPacker);
router.put('/updatePacker/:id', updatePacker);
router.delete('/deletePacker/:id', deletePacker);

module.exports = router;