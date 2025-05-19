const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/footy'

mongoose.connect(mongoURL);

const db = mongoose.connection;


db.on('connected', () => {
  console.log('connected to MongoDB server');
})

db.on('disconnected', () => {
  console.log("Disconnected from MongoDB server");
})

db.on('error', (err) => {
  console.log(err)
})


module.exports = db;
