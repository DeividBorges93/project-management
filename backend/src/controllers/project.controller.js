const projectService = require('../services/project.service');

const createProject = async (req, res, next) => {
  const result = await projectService.createProject(req);

  if (result.code) {
    next(result);
    return;
  };

  return res.status(201).json(result);
};

const getProjectByUsername = async (req, res, next) => {
  const result = await projectService.getProjectByUsername(req);

  if (result.code) {
    next(result);
    return;
  };

  return res.status(200).json(result);

}

module.exports = {
  createProject,
  getProjectByUsername
};
