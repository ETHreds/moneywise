const transfersRouter = require('express').Router()

const {
    addAccount,
    getUserAccounts
} = require('../controllers/accounts.controller')

transfersRouter.post('/:user_id', addAccount); // /Add User Accounts
transfersRouter.get('/:user_id', getUserAccounts);


module.exports = transfersRouter;