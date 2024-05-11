require('dotenv').config(); 
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://chamodbandara78:bino123@cluster0.hwyhauq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = { connectToDatabase };
