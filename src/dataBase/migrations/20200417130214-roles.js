'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('roles', {
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
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
    return queryInterface.dropTable('roles');
  }
};
