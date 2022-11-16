const express = require('express');

const router = express.Router();

const auth = require('../middlewares/auth.middleware');

const { createProject, getProjectByUsername } = require('../controllers/project.controller');

router.post('/project', auth, createProject);

router.get('/projects', auth, getProjectByUsername);

module.exports = router;