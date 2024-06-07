const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgres.db');

const AccountType = sequelize.define('account_type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    account_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = AccountType;
