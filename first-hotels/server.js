const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const passport = require('./auth');

const logRequest = (req, res, next) => {
  console.log(`${new Date().toLocaleString()} request made to: ${req.originalUrl}`);
  next();
}

app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local', {session: false}) 

app.get('/', logRequest, localAuthMiddleware, (req, res) => {
  res.send('Hello World')
})



const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');

app.use('/menu', logRequest, menuRoutes);


app.listen(3000, () => {
  console.log("listening to 3000")
})