const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNul: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNul: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNul: false,
  },
};

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    Attributes,
    {
      timestamps: false,
      tablename: 'Users',
    },
  );

  return User;
};
