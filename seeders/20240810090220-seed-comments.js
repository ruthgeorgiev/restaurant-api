'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      { text: 'Great pizza!', restaurant_id: 1, date: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { text: 'Amazing sushi!', restaurant_id: 2, date: new Date(), createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
