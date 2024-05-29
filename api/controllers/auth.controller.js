const User = require('../models/users.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//Login
function signIn(req, res, next) {
    const { email, password } = req.body
    User.findOne({ where: { email: email } })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'User not found' });
            } else {
                bcrypt.compare(password, user.password)
                    .then(isPasswordValid => {
                        if (!isPasswordValid) {
                            return res.status(401).json({ message: 'Invalid password' });
                        } else {
                            const token = jwt.sign({
                                userId: user.id
                            }, 'secret', { expiresIn: '1h' });
                            return res.status(200).json({ message: 'Authentication successful', token: token });
                        }
                    })
                    .catch(error => {
                        console.error('Error comparing passwords:', error);
                        return res.status(500).json({ message: 'Internal server error' });
                    });
            }
        })
        .catch(error => {
            console.error('Error finding user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        });
}

//Log Out
function signOut(req, res, next) {
    const token = req.headers.authorization;

    return res.status(200).json({ message: `${token} invalidated successfully` });
}

module.exports = {
    signIn,
    signOut
}