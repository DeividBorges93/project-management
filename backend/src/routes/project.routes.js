const express = require('express');

const router = express.Router();

const auth = require('../middlewares/auth.middleware');

const { createProject } = require('../controllers/project.controller');

router.post('/project', auth, createProject);

module.exports = router;