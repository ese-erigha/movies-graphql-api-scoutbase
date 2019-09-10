'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Movies',
    [
      {
        title: 'Equalizer',
        year: 2009,
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Once upon a time in Mexico',
        year: 2001,
        rating: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Three Idiots',
        year: 2010,
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Movies', null, {})
};
