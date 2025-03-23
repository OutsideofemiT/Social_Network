import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/User.js';  

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB: ', error));

// API working route
app.get('/api', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Route to get users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();  // Fetch all users from MongoDB
    res.status(200).json(users);  // Send the users as a response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
