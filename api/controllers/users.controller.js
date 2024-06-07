const User = require('../models/users.model');
const bcrypt = require('bcrypt');

//get all users
function getUsers(req, res) {
    User.findAll()
        .then(users => {
            res.status(200).json({ users: users });
        })
        .catch(err => console.log(err));
}

//get user by id
function getUser(req, res) {
    const userId = req.params.userId;
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found!' });
            }
            res.status(200).json({ user: user });
        })
        .catch(err => console.log(err));
}

//create user


function createUser(req, res) {
    const { name, email, password } = req.body;

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        User.findOrCreate({
            where: { email: email },
            defaults: { name: name, password: hashedPassword }
        })
            .then(([user, created]) => {
                if (created) {
                    console.log('Created User');
                    res.status(201).json({
                        message: 'User created successfully!',
                        user: user
                    });
                } else {
                    return res.json({
                        message: 'Email already exists!'
                    });
                }
            })
            .catch(err => {
                console.error('Error creating user:', err);
                return res.status(500).json({ message: 'Internal Server Error' });
            });
    });
}



//update user
function updateUser(req, res) {
    const userId = req.params.userId;
    const updatedName = req.body.name;
    const updatedEmail = req.body.email;
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found!' });
            }
            user.name = updatedName;
            user.email = updatedEmail;
            return user.save();
        })
        .then(result => {
            res.status(200).json({ message: 'User updated!', user: result });
        })
        .catch(err => console.log(err));
}

//delete user
function deleteUser(req, res) {
    const userId = req.params.userId;
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found!' });
            }
            return User.destroy({
                where: {
                    id: userId
                }
            });
        })
        .then(result => {
            res.status(200).json({ message: 'User deleted!' });
        })
        .catch(err => console.log(err));
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
}