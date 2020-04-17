module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('schedules', {
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: 'DATE'
      },
      time: {
        type: 'TIME'
      },
      type: {
        type: Sequelize.STRING(255)
      },
      description: {
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
    return queryInterface.dropTable('schedules');
  }
};
