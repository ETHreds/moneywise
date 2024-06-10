const authRouter = require('express').Router()

const {
    signIn,
    signOut

} = require('../controllers/auth.controller.js')


authRouter.get('/', signOut); // /logout
authRouter.post('/', signIn); // /logIn
authRouter.post('/refresh-token', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token missing' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token invalid' });
        }

        const newToken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token: newToken });
    });
});


module.exports = authRouter;