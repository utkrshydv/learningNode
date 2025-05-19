const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');

app.use(express.json());


app.get('/', (req, res) => {
  res.send('My favourite Football Players');
})

const playerRoutes = require('./routes/playerRoutes');
app.use('/player', playerRoutes);

app.listen(3000, () => {
  console.log("listening to 3000")
})