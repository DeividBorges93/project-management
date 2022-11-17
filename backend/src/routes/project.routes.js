const express = require('express');

const router = express.Router();

const auth = require('../middlewares/auth.middleware');

const {
  createProject,
  getProjectByUsername,
  getProjectById,
  updateProject,
  updateDoneProject,
  deleteProject,
} = require('../controllers/project.controller');

router.post('/project', auth, createProject);

router.get('/projects', auth, getProjectByUsername);
router.get('/project/:id', auth, getProjectById);

router.put('/projects/:id', auth, updateProject);

router.patch('/projects/:id/done', auth, updateDoneProject);

router.delete('/projects/:id', auth, deleteProject);

module.exports = router;
