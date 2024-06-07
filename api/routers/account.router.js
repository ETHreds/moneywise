const accountsRouter = require('express').Router()

const {
    addAccount,
    getUserAccounts
} = require('../controllers/accounts.controller')

accountsRouter.post('/:user_id', addAccount); // /Add User Accounts
accountsRouter.get('/:user_id', getUserAccounts);


module.exports = accountsRouter;