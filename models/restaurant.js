'use strict';
module.exports = (sequelize, DataTypes) => {
    const Restaurant = sequelize.define('Restaurant', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Cities', // Target model
                key: 'id',       // Key in the target model
            }
        }
    });

    Restaurant.associate = function(models) {
        Restaurant.belongsTo(models.City, { foreignKey: 'city_id' });
        Restaurant.belongsToMany(models.Tag, { through: 'RestaurantHasTag' });
        Restaurant.hasMany(models.Comment, { foreignKey: 'restaurant_id' });
    };

    return Restaurant;
};
