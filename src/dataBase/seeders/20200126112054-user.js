'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'Roman',
        secondName: 'Kobetiak',
        email: 'kobetyakroman@ukr.net',
        role: 'admin',
        password: '$2a$10$QtaZYVQ.Cr5DxYjqxA989.NCLjQZqmixJ5X7F3eMKSiXPEOa7sJV2', //admin
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
