module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: Sequelize.STRING(255)
      },
      secondName: {
        type: Sequelize.STRING(255)
      },
      email: {
        type: Sequelize.STRING(255)
      },
      password: {
        type: Sequelize.STRING(255)
      },
      role: {
        type: Sequelize.STRING(255)
      },
      createdAt: {
        type: 'DATETIME',
      },
      updatedAt: {
        type: 'DATETIME',
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
