const express = require('express');
const router = express.Router();
const PlayerItem = require('../models/PlayerItem');

router.post('/', async (req, res) => {
  try{
    const data = req.body;
    const newPlayerItem = new PlayerItem(data);
    const savedItem = await newPlayerItem.save();
    console.log("Player Saved");
    res.status(200).json(savedItem);
  } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

router.get('/', async (req, res) => {
  try{
    const data = await PlayerItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch(err){
    console.log(err);
    res.status(500).json({error: 'internal Server Error'});
  }
})

router.get('/:pos', async (req, res) => {
  try{
    const pos = req.params.pos;
    const response = await PlayerItem.find({position: pos});
    console.log("response fetched");
    res.status(200).json(response);
  } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'})
  }
})

module.exports = router;