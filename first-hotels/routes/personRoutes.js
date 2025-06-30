const express = require('express');
const router = express.Router();
const Person = require('../models/Person')
const { jwtAuthMiddleware, generateToken } = require('../jwt')


router.post('/signup', async (req, res) => {
  try{
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    console.log('data saved');

    const payload = {
      id: savedPerson.id,
      username: savedPerson.username
    }
    console.log(JSON.stringify(payload))

    const token = generateToken(payload)

    console.log("Token is: ", token)

    res.status(200).json({savedPerson: savedPerson, token : token});
  } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});

  }
})

router.post('/login', async(req, res) => {
  try{

    const {username, password} = req.body;
    const user = await Person.findOne({username: username})

    if(!user || !(await user.comparePassword(password))){
      return res.status(401).json({error: 'Invalid username or password'})
    }
      const payload = {
        id: user.id,
        username: user.username
      }

      const token = generateToken(payload)

      res.json({token})
    } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'})
  }
})
router.get('/profile', jwtAuthMiddleware,async(req, res) =>{
  try{
    const userData = req.user;
  console.log("userData: ", userData)
  const userId = userData.id
  const user = await Person.findById(userId)
  res.status(200).json({user})
  }catch(err){
    consolelog(err);
    res.status(500).json({error: "Internal server error"})
  }
  
})

router.get('/', jwtAuthMiddleware, async (req, res) => {
  try{
    const data = await Person.find();
    console.log("data fetched")
    res.status(200).json(data)

  }catch(err){
    console.log(err);
    res.status(500).json({error: 'internal server error'});

  }
})

router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
       const response = await Person.find({work: workType});
       console.log("response Fetched");
       res.status(200).json(response);
    } else {
      res.status(404).json({error: "Invalid work Type"});
    }

  } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

module.exports = router;