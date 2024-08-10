'use strict';
module.exports = (sequelize, DataTypes) => {
    const RestaurantHasTag = sequelize.define('RestaurantHasTag', {
        restaurant_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Restaurants',
                key: 'id'
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Tags',
                key: 'id'
            }
        }
    }, {});
    return RestaurantHasTag;
};
