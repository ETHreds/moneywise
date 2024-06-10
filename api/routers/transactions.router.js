const transactionsRouter = require('express').Router()

const {
    deleteTransaction,
    editTransaction,
    createTransaction,
    getTransaction,
    getTransactions,
    getIncomeTransactions,
    getExpenseTransactions,
} = require('../controllers/transactions.controller');

// Routes for single transaction
transactionsRouter.post('/', createTransaction);
transactionsRouter.get('/:id', getTransaction);
transactionsRouter.put('/:id', editTransaction);
transactionsRouter.delete('/:id', deleteTransaction);

// Routes for multiple transactions
transactionsRouter.get('/', getTransactions);
transactionsRouter.get('/incomes', getIncomeTransactions);
transactionsRouter.get('/expenses', getExpenseTransactions);




module.exports = transactionsRouter;