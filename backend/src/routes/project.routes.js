const express = require('express');

const router = express.Router();

const auth = require('../middlewares/auth.middleware');

const { createProject, getProjectByUsername, getProjectById } = require('../controllers/project.controller');

router.post('/project', auth, createProject);

router.get('/projects', auth, getProjectByUsername);
router.get('/project/:id', auth, getProjectById);

module.exports = router;