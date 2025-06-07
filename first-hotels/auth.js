const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person');

passport.use(new LocalStrategy(async (username, password, done) => {
  try{
    console.log("Received Credentials: ", username, password);
    const user = await Person.findOne({ username: username})

    if(!user){
      return done(null, false, {message: 'incorrect username'});
    }

    const isPasswordMatch = await user.comparePassword(password);

    if(isPasswordMatch){
      return done(null, user);
    } else {
      return done(null, false, {message: 'incorrect password'});
    }
  } catch(err){
    return done(err);
  }
}))


module.exports = passport;