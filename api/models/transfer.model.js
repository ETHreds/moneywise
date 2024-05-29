const Sequelize = require('sequelize');
const db = require('../utils/postgres.db');

// Define the Transfer model
const Transfer = db.define('transfer', {
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    accountFrom: {
        type: Sequelize.STRING,
        allowNull: false
    },
    accountTo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    transactionCost: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true
    }
});

module.exports = Transfer;
