'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Movie_Directors',
    [
      {
        movieId: 1,
        personId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 1,
        personId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 1,
        personId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 2,
        personId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 2,
        personId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 2,
        personId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 3,
        personId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 3,
        personId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 3,
        personId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Movie_Directors', null, {})
};
