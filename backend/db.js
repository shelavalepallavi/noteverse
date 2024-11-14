const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://roshanshelavale2005:plmnko09@cluster0.5hkji.mongodb.net/noteverse"

const connectToMongo = async()=>{
  try {
    await mongoose.connect(mongoURI)
    console.log('Connected to MongoDB successfully.');
    
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    
  }
}

module.exports = connectToMongo