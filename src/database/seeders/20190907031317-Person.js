'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'People',
    [
      {
        name: 'Denzel Washington',
        birthday: new Date(),
        countryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sylvester Stallione',
        birthday: new Date(),
        countryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Robert De Niro',
        birthday: new Date(),
        countryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Genevieve Nnaji',
        birthday: new Date(),
        countryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chimamanda Adichie',
        birthday: new Date(),
        countryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tom Cruise',
        birthday: new Date(),
        countryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('People', null, {})
};
