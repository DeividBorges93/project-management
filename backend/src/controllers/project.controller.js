const projectService = require('../services/project.service');

const createProject = async (req, res, next) => {
  const result = await projectService.createProject(req);

  if (result.code) {
    next(result);
    return;
  };

  return res.status(201).json(result);
};

module.exports = {
  createProject,
};
