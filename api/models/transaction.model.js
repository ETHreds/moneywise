const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgres.db');
const Account = require('./accounts.model');
const Category = require('./categories.models');

const Transaction = sequelize.define('transaction', {
    transaction_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.ENUM('income', 'expense'),
        allowNull: false,
    },
    recurring: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    nextPayment: {
        type: DataTypes.DATE,
    },
    account_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Account,
            key: 'id',
        },
        allowNull: false,
    },
    counterparty: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'id',
        },
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: true,
});

Account.hasMany(Transaction, { foreignKey: 'account_id' });
Transaction.belongsTo(Account, { foreignKey: 'account_id' });

Category.hasMany(Transaction, { foreignKey: 'category_id' });
Transaction.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = Transaction;
