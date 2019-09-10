'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Movie_Actors',
    [
      {
        movieId: 1,
        personId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 1,
        personId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 1,
        personId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 2,
        personId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 2,
        personId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 2,
        personId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 3,
        personId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 3,
        personId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 3,
        personId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Movie_Actors', null, {})
};
