const express = require('express');
const router = express.Router();
const { addUnLoader, getAllUnLoader } = require('../../controller/master/UnLoaderController');

router.post('/addUnLoader', addUnLoader);
router.get('/getAllUnLoader', getAllUnLoader)

module.exports = router;