const express = require('express')
const app = express()
const db = require('./db')
const passport = require('./auth');
const Test = require('./models/Test');

app.use(express.json());
app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local', {session : false})


app.get('/', localAuthMiddleware, (req, res) => {
  res.send("helloww helloww hellow")
})

app.post('/', async (req, res) => {
  try{
    const data = req.body;
    const newPerson = new Test(data);
    const savedPerson = await newPerson.save();
    res.status(200).json(savedPerson);
  } catch(err){
    res.status(500).json({error: 'internal server error'});
  }

})

app.listen(3000, () => {
  console.log("listening to port 3000")
})