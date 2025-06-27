const express = require('express');
const router = express.Router();

const { login, addUser } = require('../../controller/auth/AuthController');

router.post('/login', login);
router.post('/addUser', addUser);

module.exports = router;