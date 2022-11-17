module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zipCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'zip_code',
      },
      cost: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      done: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      deadline: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'username',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at',
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Projects');
  },
};
