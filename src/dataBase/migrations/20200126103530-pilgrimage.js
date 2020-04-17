module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pilgrimages', {
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
      description: {
        type: Sequelize.STRING(255)
      },
      imgUrl: {
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
    return queryInterface.dropTable('pilgrimages');
  }
};
