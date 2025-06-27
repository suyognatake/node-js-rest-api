const express = require('express');
const router = express.Router();

const { addLoader, getAllLoader, updateLoader, deleteLoader } = require('../../controller/master/LoaderController');


router.post('/addLoader', addLoader);
router.get('/getAllLoader', getAllLoader);
router.put('/updateLoader/:id', updateLoader);
router.delete('/deleteLoader/:id', deleteLoader);


module.exports = router;

