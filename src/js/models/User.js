const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
class User extends Model {}
User.init(
    {
        username: {
            type: DataTypes.STRING
        },
        mail: {
            type: DataTypes.STRING
        }
    },

    {
        sequelize,
        modelName: 'User',
        timestamps: false,

    }
);

module.exports = {
    User
};