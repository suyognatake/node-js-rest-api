const express = require('express');
const router = express.Router();


const { addTransporter, getAllTransporter, updateTransporter, deleteTransporter } = require('../../controller/master/TransporterController');

router.post('/addTransporter', addTransporter);
router.get('/getAllTransporter', getAllTransporter);
router.put('/updateTransporter/:id', updateTransporter);
router.delete('/deleteTransporter/:id', deleteTransporter);
module.exports = router;