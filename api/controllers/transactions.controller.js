const { Account } = require('../models/accounts.model');
const { Transaction } = require('../models/transaction.model')
const { Category } = require('../models/categories.models')

async function createTransaction(req, res) {
    try {
        const { type, recurring, nextPayment, account_id, counterparty, category, amount, description } = req.body;


        if (!type || !account_id || !counterparty || !category || !amount) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        let category_id = null;
        let existingCategory = await Category.findOne({ where: { name: category } });
        if (!existingCategory) {
            existingCategory = await Category.create({ name: category });
            category_id = existingCategory.id;
        } else {
            category_id = existingCategory.id;
        }

        const transaction = await Transaction.create({
            type,
            recurring: recurring || false,
            nextPayment,
            account_id,
            counterparty,
            category_id,
            amount,
            description
        });

        // Update the account balance
        const account = await Account.findByPk(account_id);
        if (!account) {
            return res.status(404).json({ error: 'Account not found' });
        }

        if (type === 'income') {
            await account.increment('current_balance', { by: amount });
        } else if (type === 'expense') {
            await account.decrement('current_balance', { by: amount });
        }

        return res.status(201).json({ message: 'Transaction created successfully', transaction });
    } catch (error) {
        console.error('Error creating transaction:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
async function getTransaction(req, res) {
    try {
        const { id } = req.params;

        // Retrieve the transaction from the database by its ID
        const transaction = await Transaction.findByPk(id);

        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        // Return the transaction as a response
        return res.status(200).json(transaction);
    } catch (error) {
        console.error('Error fetching transaction:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async function deleteTransaction(req, res) {
    try {
        const { id } = req.params;

        const transaction = await Transaction.findByPk(id);
        if (!transaction) {
            return res.status(404).json({ error: 'Transaction not found' });
        }

        await transaction.destroy();

        const account = await Account.findByPk(transaction.account_id);
        if (!account) {
            return res.status(404).json({ error: 'Account not found' });
        }

        if (transaction.type === 'income') {
            await account.decrement('balance', { by: transaction.amount });
        } else if (transaction.type === 'expense') {
            await account.increment('balance', { by: transaction.amount });
        }
        await transaction.destroy();

        return res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        console.error('Error deleting transaction:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

async function editTransaction(req, res) {
    try {
        const { transaction_id } = req.params;
        const { type, recurring, nextPayment, counterparty, category_id, amount, description } = req.body;

        // Check if the transaction exists
        const transaction = await Transaction.findByPk(transaction_id);
        if (!transaction) {
            return res.status(404).json({ error: 'Transaction not found' });
        }

        // Update the transaction
        transaction.type = type || transaction.type;
        transaction.recurring = recurring || transaction.recurring;
        transaction.nextPayment = nextPayment || transaction.nextPayment;
        transaction.counterparty = counterparty || transaction.counterparty;
        transaction.category_id = category_id || transaction.category_id;
        transaction.amount = amount || transaction.amount;
        transaction.description = description || transaction.description;
        await transaction.save();

        return res.status(200).json({ message: 'Transaction updated successfully', transaction });
    } catch (error) {
        console.error('Error editing transaction:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
async function getTransactions(req, res) {
    try {
        const transactions = await Transaction.findAll();

        return res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function getIncomeTransactions(req, res) {
    try {
        const incomeTransactions = await Transaction.findAll({
            where: { type: 'income' },
        });

        return res.status(200).json(incomeTransactions);
    } catch (error) {
        console.error('Error fetching income transactions:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async function getExpenseTransactions(req, res) {
    try {
        const expenseTransactions = await Transaction.findAll({
            where: { type: 'expense' },
        });
        return res.status(200).json(expenseTransactions);
    } catch (error) {
        console.error('Error fetching expense transactions:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    deleteTransaction,
    editTransaction,
    createTransaction,
    getTransactions,
    getIncomeTransactions,
    getExpenseTransactions,
    getTransaction
};



