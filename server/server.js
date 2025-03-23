import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/User.js';
import Thought from '../models/Thought.js';

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

// Route to get all thoughts
app.get('/api/thoughts', async (req, res) => {
  try {
    const thoughts = await Thought.find(); // Fetch all thoughts
    res.status(200).json(thoughts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching thoughts', error });
  }
});

// Route to create a new thought (userId is now required)
app.post('/api/thoughts', async (req, res) => {
  try {
    // 1. Verify userId is provided
    if (!req.body.userId) {
      return res.status(400).json({ message: 'Please provide a userId.' });
    }

    // 2. Create the new thought
    const newThought = await Thought.create(req.body);

    // 3. Push the new thought's _id into the specified user
    const updatedUser = await User.findByIdAndUpdate(
      req.body.userId,
      { $push: { thoughts: newThought._id } },
      { new: true }
    );

    // If no user found, optionally remove the newly created thought (so it's not orphaned)
    if (!updatedUser) {
      await Thought.findByIdAndDelete(newThought._id);
      return res.status(404).json({ message: 'No user found with that userId.' });
    }

    // 4. Return the created thought (and/or the updated user if you like)
    res.status(201).json({
      message: 'Thought created and linked to user successfully!',
      thought: newThought,
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating thought', error });
  }
});

// Route to get a single thought by ID
app.get('/api/thoughts/:thoughtId', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'No thought found with that ID' });
    }
    res.status(200).json(thought);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the thought', error });
  }
});

// Route to update a thought
app.put('/api/thoughts/:thoughtId', async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      req.body,
      { new: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ message: 'No thought found with that ID' });
    }
    res.status(200).json(updatedThought);
  } catch (error) {
    res.status(500).json({ message: 'Error updating the thought', error });
  }
});

// Route to delete a thought
app.delete('/api/thoughts/:thoughtId', async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!deletedThought) {
      return res.status(404).json({ message: 'No thought found with that ID' });
    }
    res.status(200).json({ message: 'Thought deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting the thought', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
