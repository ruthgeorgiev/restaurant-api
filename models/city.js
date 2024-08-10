'use strict';
module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define('City', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    City.associate = function(models) {
        City.hasMany(models.Restaurant, { foreignKey: 'city_id' });
    };

    return City;
};
