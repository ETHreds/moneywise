// models/Transaction.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgres.db');
const Account = require('./Account');
const Category = require('./Category');

const Transaction = sequelize.define('Transaction', {
    id: {
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
    accountId: {
        type: DataTypes.INTEGER,
        references: {
            model: Account,
            key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
    },
    counterparty: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
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

Account.hasMany(Transaction, { foreignKey: 'accountId' });
Transaction.belongsTo(Account, { foreignKey: 'accountId' });

Category.hasMany(Transaction, { foreignKey: 'categoryId' });
Transaction.belongsTo(Category, { foreignKey: 'categoryId' });

module.exports = Transaction;
