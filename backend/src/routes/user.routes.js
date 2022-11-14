const express = require('express');

const router = express.Router();

const auth = require('../middlewares/auth.middleware');

const { createUser, getAllUsers, getUserById } = require('../controllers/user.controller');

router.post('/users', createUser);

router.get('/users', auth, getAllUsers);
router.get('/users/:id', auth, getUserById);

module.exports = router;
