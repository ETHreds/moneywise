// Import Sequelize and the connection instance
const Sequelize = require('sequelize');
const db = require('../utils/postgres.db');

// Define the Transaction model
const Transaction = db.define('transaction', {
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        default: Sequelize.DataTypes.NOW
    },
    amount: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false
    },
    type: {
        type: Sequelize.ENUM('income', 'expense'),
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    recurring: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    account: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Transaction;
