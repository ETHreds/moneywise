// Import Sequelize and the connection instance
const Sequelize = require('sequelize');
const db = require('../utils/postgres.db');

// Define the Transaction model
const Category = db.define('category', {
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Category;
