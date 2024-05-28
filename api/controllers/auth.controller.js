const User = require('../models/users.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

//Log In
function signIn(req, res, next) {
    const { email, password } = req.body;

    User.findOne({ where: { email: email } })
        .then(user => {
            if (!user) {
                res.status(401).json({ message: 'User not found' });
            } else {
                bcrypt.compare(password, user.password)
                    .then(isPasswordValid => {
                        if (!isPasswordValid) {
                            res.status(401).json({ message: 'Invalid password' });
                        } else {
                            const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
                            res.json({ token });
                        }
                    })
                    .catch(error => {
                        console.error('Error comparing passwords:', error);
                        res.status(500).json({ message: 'Internal server error' });
                    });
            }
        })
        .catch(error => {
            console.error('Error finding user:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
}

//Log Out
function signOut(req, res, next) {
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


module.exports = {
    signIn,
    signOut,
}