const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zipCode: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  cost: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    foreignKey: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },

}

module.exports = (sequelize) => {
  const Project = sequelize.define(
    'Project',
    Attributes,
    {
      underscored: true,
      timestamps: true,
      tableName: 'Projects',
    },
  );

  Project.associate = (models) => {
    Project.belongsTo(models.User, { foreignKey: 'username', as: 'user' });
  };

  return Project
};
