'use strict';
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        restaurant_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Restaurants',
                key: 'id'
            }
        }
    }, {});
    Comment.associate = function(models) {
        // associations can be defined here
        Comment.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id' });
    };
    return Comment;
};
