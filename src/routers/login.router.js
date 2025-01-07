const express = require('express');
const { createToken } = require('../controls/loginControls');
const { validationLogin } = require('../middlewares/login.middlewares');

// console.log(createToken);

const router = express.Router();
router.post('/', validationLogin, createToken);

module.exports = router;