// models/Category.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgres.db');

const Category = sequelize.define('category', {
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Category;
