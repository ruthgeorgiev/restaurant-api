'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // First, insert restaurants
        const restaurants = await queryInterface.bulkInsert('Restaurants', [
            { name: 'Joe’s Pizza', city_id: 1, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Sushi Samba', city_id: 2, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Italian Samba', city_id: 3, createdAt: new Date(), updatedAt: new Date() },
            { name: 'X Cafe & Bar', city_id: 4, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Indonesian Kitchen', city_id: 5, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Delicious Sweets', city_id: 6, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Grok', city_id: 7, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Uptown Cafe', city_id: 8, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Downtown Cafe', city_id: 9, createdAt: new Date(), updatedAt: new Date() },
            { name: 'The Long Street Restaurant', city_id: 10, createdAt: new Date(), updatedAt: new Date() },
            { name: 'TLS CAFE', city_id: 11, createdAt: new Date(), updatedAt: new Date() },
            { name: 'The Great Wall', city_id: 12, createdAt: new Date(), updatedAt: new Date() },
        ], { returning: true });

        // Insert tags
        const tags = await queryInterface.bulkInsert('Tags', [
            { name: 'Italian', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Sushi', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Chinese', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Cafe', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Dessert', createdAt: new Date(), updatedAt: new Date() }
        ], { returning: true });

        // Associate tags with restaurants
        await queryInterface.bulkInsert('RestaurantHasTag', [
            { restaurant_id: restaurants[0].id, tag_id: tags[0].id, createdAt: new Date(), updatedAt: new Date() },
            { restaurant_id: restaurants[1].id, tag_id: tags[1].id, createdAt: new Date(), updatedAt: new Date() },
            { restaurant_id: restaurants[2].id, tag_id: tags[0].id, createdAt: new Date(), updatedAt: new Date() },
            { restaurant_id: restaurants[3].id, tag_id: tags[3].id, createdAt: new Date(), updatedAt: new Date() },
            { restaurant_id: restaurants[5].id, tag_id: tags[4].id, createdAt: new Date(), updatedAt: new Date() },
        ]);

        // Insert comments
        await queryInterface.bulkInsert('Comments', [
            { text: 'Great pizza!', restaurant_id: restaurants[0].id, date: new Date(), createdAt: new Date(), updatedAt: new Date() },
            { text: 'Amazing sushi!', restaurant_id: restaurants[1].id, date: new Date(), createdAt: new Date(), updatedAt: new Date() },
            { text: 'Cozy atmosphere!', restaurant_id: restaurants[3].id, date: new Date(), createdAt: new Date(), updatedAt: new Date() },
            { text: 'Delicious desserts!', restaurant_id: restaurants[5].id, date: new Date(), createdAt: new Date(), updatedAt: new Date() },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('RestaurantHasTag', null, {});
        await queryInterface.bulkDelete('Comments', null, {});
        await queryInterface.bulkDelete('Restaurants', null, {});
        await queryInterface.bulkDelete('Tags', null, {});
    }
};
