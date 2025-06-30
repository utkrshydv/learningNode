const mongoose = require('mongoose');

const playerItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  age: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  club: {
    type: String,
    required: true
  },
  position: {
    type: String,
    enum: ['gk', 'cb', 'lb', 'rb', 'cm', 'dm', 'am', 'lwf', 'rwf', 'cf'],
    required: true
  },
  goals: {
    type: Number,
    required: true,
    min: 0
  },
  assists: {
    type: Number,
    required: true,
    min: 0
  }
});

const PlayerItem = mongoose.model('PlayerItem', playerItemSchema);

module.exports = PlayerItem;