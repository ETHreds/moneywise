// models/Transfer.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgres.db');
const Account = require('./Account');

const Transfer = sequelize.define('Transfer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    accountFromId: {
        type: DataTypes.INTEGER,
        references: {
            model: Account,
            key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
    },
    accountToId: {
        type: DataTypes.INTEGER,
        references: {
            model: Account,
            key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    transactionCost: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
}, {
    timestamps: true,
});

Account.hasMany(Transfer, { foreignKey: 'accountFromId', as: 'transfersFrom' });
Account.hasMany(Transfer, { foreignKey: 'accountToId', as: 'transfersTo' });
Transfer.belongsTo(Account, { foreignKey: 'accountFromId', as: 'accountFrom' });
Transfer.belongsTo(Account, { foreignKey: 'accountToId', as: 'accountTo' });

module.exports = Transfer;
