const projectService = require('../services/project.service');

const createProject = async (req, res, next) => {
  const result = await projectService.createProject(req);

  if (result.code) {
    next(result);
    return;
  }

  res.status(201).json(result);
};

const getProjectByUsername = async (req, res, next) => {
  const result = await projectService.getProjectByUsername(req);

  if (result.code) {
    next(result);
    return;
  }

  res.status(200).json(result);
};

const getProjectById = async (req, res, next) => {
  const { id } = req.params;
  const result = await projectService.getProjectById(id);

  if (result.code) {
    next(result);
    return;
  }

  res.status(200).json(result);
};

const updateProject = async (req, res, next) => {
  const result = await projectService.updateProject(req);

  if (result.code) {
    next(result);
    return;
  }

  res.status(200).json(result);
};

const updateDoneProject = async (req, res, next) => {
  const result = await projectService.updateDoneProject(req);

  if (result.code) {
    next(result);
    return;
  }

  res.status(200).json('Projeto Finalizado com sucesso');
};

const deleteProject = async (req, res, next) => {
  const { id } = req.params;

  const result = await projectService.deleteProject(req);

  if (result.code) {
    next(result);
    return;
  }

  if (result === 0) res.status(400).json(`Não foi possível deletar o projeto com ID ${id}`);

  res.status(202).json(`Projeto com o ID ${id}, deletado com sucesso.`);
};

module.exports = {
  createProject,
  getProjectByUsername,
  getProjectById,
  updateProject,
  updateDoneProject,
  deleteProject,
};
