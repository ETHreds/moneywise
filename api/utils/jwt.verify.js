const jwt = require('jsonwebtoken');

function verifyToken(req, secret) {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return Promise.reject('No token provided');
    }

    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
}

module.exports = verifyToken;