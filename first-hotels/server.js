const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Person = require('./models/Person');

const logRequest = (req, res, next) => {
  console.log(`${new Date().toLocaleString()} request made to: ${req.originalUrl}`);
  next();
}

passport.use(new LocalStrategy(async (username, password, done) => {

  try{
    console.log("Received Credentials: ", username, password)
    const user = await Person.findOne({username: username})

    if(!user){
      return done(null, false, {message: 'incorrect username'} ); //done(error, user, info)
    }

    const isPasswordMatch = user.password == password ? true : false;

    if(isPasswordMatch){
      return done(null, user);
    } else {
      return done(null, false, {message: 'incorrect password'});
    }
  }catch(err){
    return done(err);
  }
}))

app.use(passport.initialize());

app.get('/', logRequest, passport.authenticate('local', {session: false}) ,(req, res) => {
  res.send('Hello World')
})



const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');

app.use('/menu', logRequest, menuRoutes);


app.listen(3000, () => {
  console.log("listening to 3000")
})