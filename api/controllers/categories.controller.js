const Category = require('../models/Category');

async function createCategory(req, res) {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const existingCategory = await Category.findOne({ where: { name } });
        if (existingCategory) {
            return res.status(400).json({ error: 'Category already exists' });
        }
        const category = await Category.create({ name });

        return res.status(201).json(category);
    } catch (error) {
        console.error('Error creating category:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    createCategory
};
