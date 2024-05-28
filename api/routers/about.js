const express = require('express');
const router = express.Router();
const random = require('../controllers/randFortune');

router.get('/about', (req, res) => {
    const fortune = random(); // Call the random function to get a random fortune
    res.render('about', { fortune }); // Pass the fortune to the template
});

module.exports = router;
