const Sequelize = require('sequelize');
const projectSchemas = require('../schemas/project.schemas');
const { Project, User } = require('../models');
const config = require('../config/config');

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
  userProjects = Project.findAll({ where: { username }});

  return userProjects;
}

module.exports = {
  createProject,
  getProjectByUsername
};
