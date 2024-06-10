// models/Account.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgres.db');
const User = require('./users.model');
const AccountType = require('./accTypes.model');

const Account = sequelize.define('account', {
    account_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    provider: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    starting_amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    current_amount: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
    },
    account_type_id: {
        type: DataTypes.INTEGER,
        references: {
            model: AccountType,
            key: 'id',
        },
    },
}, {
    timestamps: true,
});

User.hasMany(Account, { foreignKey: 'user_id' });
Account.belongsTo(User, { foreignKey: 'user_id' });

AccountType.hasMany(Account, { foreignKey: 'account_type_id' });
Account.belongsTo(AccountType, { foreignKey: 'account_type_id' });

module.exports = Account;
