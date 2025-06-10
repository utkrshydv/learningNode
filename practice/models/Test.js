const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const testSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String
  }, 
  password: {
    required: true,
    type: String
  }
})

testSchema.pre('save', async function(next) {
  const user = this

  if(!user.isModified('password')){
    return next();
  }

  try{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);

    user.password = hashedPassword;
    next();
  } catch(err){
    return next(err);
  }
  
})

testSchema.methods.comparePassword = async function(candidatePassword){
  try{
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch(err){
    throw err;
  }
}

const Test = mongoose.model('Test', testSchema);

module.exports = Test

