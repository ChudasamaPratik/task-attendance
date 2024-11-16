const express = require('express');
const { login, register } = require("../controllers/authController");
const { validateLogin, validateRegister } = require('../validators/authValidator');



const router = express.Router();


router.post('/register', register);
router.post('/login', login);


module.exports = router;