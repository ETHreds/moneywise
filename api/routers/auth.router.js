const authRouter = require('express').Router()

const {
    signIn,
    signOut

} = require('../controllers/auth.controller.js')


authRouter.get('/', signOut); // /logout
authRouter.post('/', signIn); // /logIn

module.exports = authRouter;