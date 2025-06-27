const express = require('express');
const router = express.Router();

const { savePreDo, deletePreDo } = require('../../controller/pre-do/PreDoController');

router.post('/savePreDo', savePreDo);
router.delete('/deletePreDo/:id', deletePreDo);

module.exports = router;