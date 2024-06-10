const User = require('../models/users.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const verifyToken = require('../utils/jwt.verify')
require('dotenv').config()

//Login
async function signIn(req, res, next) {
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
                            }, process.env.JWT_SECRET, { expiresIn: '1h' });
                            console.log(user.name, token)
                            return res.status(200).json({
                                message: 'Authentication successful',
                                token,
                                user: {
                                    userId: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            });
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


// Middleware function to verify JWT token
const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token missing' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token invalid' });
        }

        req.user = user;
        next();
    });
};





module.exports = {
    signIn,
    signOut,
    authenticateToken
}