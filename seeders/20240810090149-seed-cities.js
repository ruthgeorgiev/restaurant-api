'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cities', [
      { name: 'New York', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Los Angeles', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Zurich', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jakarta', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Frankfurt', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Berlin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bern', createdAt: new Date(), updatedAt: new Date() },
      { name: 'London', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Paris', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tokyo', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jerusalem', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tel Aviv', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {});
  }
};
