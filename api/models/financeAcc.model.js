const Sequelize = require('sequelize');
const db = require('../utils/postgres.db');

const CashWallet = db.define('cash', {
    balance: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
});

const CheckingAccount = db.define('checkingAcc', {
    bankName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    accountNumber: {
        type: Sequelize.STRING,
    },
    balance: {
        type: Sequelize.DECIMAL(10, 2),
    },
    interestRate: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: true,
    },
});


const TransactionAccount = sequelize.define('transactionAcc', {
    providerName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    accountNumber: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    balance: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
});


module.exports = {
    CashWallet,
    CheckingAccount,
    TransactionAccount,
};