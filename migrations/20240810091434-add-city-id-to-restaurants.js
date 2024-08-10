'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableDescription = await queryInterface.describeTable('Restaurants'); // use lowercase if necessary

    if (!tableDescription.city_id) {
      await queryInterface.addColumn('restaurants', 'city_id', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    const tableDescription = await queryInterface.describeTable('Restaurants'); // use lowercase if necessary

    if (tableDescription.city_id) {
      await queryInterface.removeColumn('restaurants', 'city_id');
    }
  }
};
