const express = require('express');

const router = express.Router();

const { login } = require('../controllers/login.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/login', login, auth);

module.exports = router;
