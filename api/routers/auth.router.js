const authRouter = require('express').Router()

const {
    signIn,
    signOut

} = require('../controllers/auth.controller.js')


authRouter.get('/auth', signOut); // /logout
authRouter.post('/auth', signIn); // /logIn

module.exports = authRouter;