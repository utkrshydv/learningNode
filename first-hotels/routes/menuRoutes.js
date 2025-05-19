const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');


router.post('/', async (req, res) => {
  try{
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const savedItem = await newMenuItem.save();
   console.log("menu item saved");
   res.status(200).json(savedItem);
  } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});

  }
})

router.get('/', async (req, res) => {
  try{
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  }catch(err){
     console.log(err);
    res.status(500).json({error: 'internal server error'});
  }
});

router.get('/:tasteType', async (req, res) => {
  try{
    const tasteType = req.params.tasteType;
    if(tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'spicy'){
      const response = await MenuItem.find({taste: tasteType});
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({error: "Invalid Taste Type"});
    }
  } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'})
  }
})

module.exports = router;