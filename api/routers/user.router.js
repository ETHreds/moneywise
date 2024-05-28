const usersRouter = require('express').Router()

const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/users.controller')


usersRouter.get('/', getUsers); // /users
usersRouter.get('/:userId', getUser); // /users/:userId
usersRouter.post('/', createUser); // /users
usersRouter.put('/:userId', updateUser); // /users/:userId
usersRouter.delete('/:userId', deleteUser); // /users/:userId

module.exports = usersRouter;
