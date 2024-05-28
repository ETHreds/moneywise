const fortunes = require('../models/fortunes')

function random() {
    const num = fortunes[Math.floor(Math.random() * fortunes.length)]
    return num
}

module.exports = random