const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { engine } = require('express-handlebars');

const app = express();


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());



app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(__dirname + '/public'))


const homeRouter = require('./routers/home');
app.get('/', homeRouter);

const aboutRouter = require('./routers/about');
app.use('/', aboutRouter);

app.use((req, res) => {
  res.status(404)
  res.render('404')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
})

module.exports = app;