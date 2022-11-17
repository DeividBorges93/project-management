const Sequelize = require('sequelize');
const projectSchemas = require('../schemas/project.schemas');
const { Project, User } = require('../models');
const config = require('../config/config');
const axios = require('axios');

const sequelize = new Sequelize(config.development);

const createProject = async (req) => {
  const { error } = projectSchemas.validate(req.body);
  const { title, zipCode, deadline, cost, done } = req.body;
  const { username } = req.headers;

  if (error) {
    const [code, message] = error.message.split('|');
    return { code, message };
  };

  const user = await User.findOne({ raw: true, where: { username }});

  if (!user) return { code: 400, message: 'User not found' };

  const result = sequelize.transaction(async (t) => {
    const project = await Project.create({ title,
      zipCode,
      cost,
      done,
      deadline,
      username
    },
    { transaction: t });

    return project;
  });

  return result;
};

const getProjectByUsername = async (req) => {
  const { username } = req.headers
  const userProjects = Project.findAll({ where: { username }});

  return userProjects;
};

const getProjectById = async (id) => {
  const projectById = await Project.findByPk(id, { raw: true, attributes: { exclude: ['password'] } });

  if (!projectById) return { code: 404, message: 'Project does not exists' };

  const { zipCode } = projectById;

  const { data: { cep, localidade, uf, bairro, logradouro } } = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);

  if (!cep || cep ==! zipCode) {
    return { code: 400, message: 'zip code invalid' }
  } else {
    delete projectById.zipCode;
    projectById.address = {
      estado: uf,
      cidade: localidade,
      bairro,
      logradouro,
    };

    return projectById;
  };
};

const updateProject = async (req) => {
  const { username } = req.headers;
  const { title, zipCode, cost, deadline } = req.body;

  const projectUpdated = await Project.update({
    title,
    zipCode,
    cost,
    deadline
  }, 
  { 
    where: { username },
    returning: true,
    plain: true
  });

  return projectUpdated[1];
};

const updateDoneProject = async (req) => {
  const { username } = req.headers;
  const { id } = req.params;
  const { done } = req.body;
  
  if (!id) return { code: 400, message: 'ID not found' };

  if (!username) return { code: 400, message: 'username not found'};
  
  await Project.update({
    done,
  },
  {
    where: { username, id },
  });

};

module.exports = {
  createProject,
  getProjectByUsername,
  getProjectById,
  updateProject,
  updateDoneProject
};
