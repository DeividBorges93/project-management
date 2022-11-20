const Sequelize = require('sequelize');
const axios = require('axios');
const projectSchemas = require('../schemas/project.schemas');
const { Project, User } = require('../models');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const createProject = async (req) => {
  const { error } = projectSchemas.validate(req.body);
  const {
    title, zipCode, deadline, cost, done,
  } = req.body;

  const { username } = req.headers;

  if (error) {
    const [code, message] = error.message.split('|');
    return { code, message };
  }

  const user = await User.findOne({ raw: true, where: { username } });

  if (!user) return { code: 400, message: 'User not found' };

  const result = sequelize.transaction(async (t) => {
    const project = await Project.create(
      {
        title,
        zipCode,
        cost,
        done,
        deadline,
        username,
      },
      { transaction: t },
    );

    return project;
  });

  return result;
};

const getProjectByUsername = async (req) => {
  const { username } = req.headers;

  if (!username ) return { code: 400, message: 'Username is invalid'};
  
  const userProjects = Project.findAll({ where: { username } });

  return userProjects;
};

const getProjectById = async (id) => {
  const options = {
    raw: true,
    attributes: { exclude: ['password'] },
  };

  const projectById = await Project.findByPk(id, options);

  if (!projectById || !projectById.id) return { code: 404, message: 'Project does not exists' };

  const { zipCode } = projectById;

  const {
    data: {
      cep, localidade, uf, bairro, logradouro,
    },
  } = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);

  const formatedCep = Number(cep.replace('-', ''));

  if (!formatedCep || formatedCep !== zipCode) {
    return { code: 400, message: 'zip code invalid' };
  }
  delete projectById.zipCode;
  projectById.address = {
    estado: uf,
    cidade: localidade,
    bairro,
    logradouro,
  };

  return projectById;
};

const updateProject = async (req) => {
  const { username } = req.headers;
  const {
    title, zipCode, cost, deadline,
  } = req.body;

  const projectUpdated = await Project.update(
    {
      title,
      zipCode,
      cost,
      deadline,
    },
    {
      where: { username },
      returning: true,
      plain: true,
    },
  );

  return projectUpdated[1];
};

const updateDoneProject = async (req) => {
  const { username } = req.headers;
  const { id } = req.params;
  const { done } = req.body;

  if (!id) return { code: 400, message: 'ID not found' };

  if (!username) return { code: 400, message: 'username not found' };

  return Project.update(
    {
      done,
    },
    {
      where: { username, id },
    },
  );
};

const deleteProject = async (req) => {
  const { username } = req.headers;
  const { id } = req.params;

  const deleted = await Project.destroy({ where: { id, username } });

  return deleted;
};

module.exports = {
  createProject,
  getProjectByUsername,
  getProjectById,
  updateProject,
  updateDoneProject,
  deleteProject,
};
