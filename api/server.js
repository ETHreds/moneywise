const http = require('http')
const app = require('./app');

const server = http.createServer(app)
require('dotenv').config()

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});