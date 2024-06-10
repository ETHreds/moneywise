const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    const fortune = random();
    res.render('about', { fortune });
});

module.exports = router;
