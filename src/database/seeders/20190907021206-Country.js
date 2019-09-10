'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Countries',
    [
      {
        name: 'USA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Germany',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nigeria',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Countries', null, {})
};
