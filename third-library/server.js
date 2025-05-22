const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Welcome to my Library");
})

const bookRoutes = require('./routes/bookRoutes');

app.use('/book', bookRoutes);

app.listen(3000, () => {
  console.log('Listening to 3000')
})
