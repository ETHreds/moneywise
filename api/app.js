const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { engine } = require('express-handlebars');
const sequelize = require('./utils/postgres.db')

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

//Users

app.use('/users', require('./routers/user.router'));

// Auth

app.use('/auth', require('./routers/auth.router'));

// Accounts

app.use('/accounts', require('./routers/account.router'));

// Transaction
app.use('/transactions', require('./routers/transactions.router'));

app.use((req, res) => {
  res.status(404)
  res.render('404')
})

// custom 500 page
app.use((err, req, res) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
})


// sync sequelize

sequelize.sync()
  .then(result => {
    console.log("Database connected");
  })
  .catch(err => console.log(err));

module.exports = app;