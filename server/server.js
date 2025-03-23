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

// ----------------------
// Routes for Users
// ----------------------

// GET all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();  
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

// POST (create) a new user
app.post('/api/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// PUT (update) a user by ID
app.put('/api/users/:userId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
});

// DELETE a user by ID
app.delete('/api/users/:userId', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
});

// ----------------------
// Routes for Thoughts
// ----------------------

// GET all thoughts
app.get('/api/thoughts', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching thoughts', error });
  }
});

// POST (create) a new thought (userId is required)
app.post('/api/thoughts', async (req, res) => {
  try {
    // Ensure userId is provided in the request body
    if (!req.body.userId) {
      return res.status(400).json({ message: 'Please provide a userId.' });
    }

    // Create the new thought
    const newThought = await Thought.create(req.body);

    // Push the new thought's _id into the user's "thoughts" array
    const updatedUser = await User.findByIdAndUpdate(
      req.body.userId,
      { $push: { thoughts: newThought._id } },
      { new: true }
    );

    // If no user is found, remove the newly created thought to avoid orphans
    if (!updatedUser) {
      await Thought.findByIdAndDelete(newThought._id);
      return res.status(404).json({ message: 'No user found with that userId.' });
    }

    // Respond with the created thought and updated user
    res.status(201).json({
      message: 'Thought created and linked to user successfully!',
      thought: newThought,
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating thought', error });
  }
});

// GET a single thought by ID
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

// PUT (update) a thought by ID
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

// DELETE a thought by ID
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

// ----------------------
// Routes for Friends
// ----------------------

// Add a friend to a user's friend list
app.post('/api/users/:userId/friends/:friendId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $push: { friends: req.params.friendId } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error adding friend', error });
  }
});

// Remove a friend from a user's friend list
app.delete('/api/users/:userId/friends/:friendId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error removing friend', error });
  }
});

// ----------------------
// Routes for Reactions
// ----------------------

// Add a reaction to a thought
app.post('/api/thoughts/:thoughtId/reactions', async (req, res) => {
  try {
    // Expect the request body to contain reactionBody and username
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true, runValidators: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ message: 'No thought found with that ID' });
    }
    res.status(200).json(updatedThought);
  } catch (error) {
    res.status(500).json({ message: 'Error adding reaction', error });
  }
});

// Remove a reaction from a thought
app.delete('/api/thoughts/:thoughtId/reactions/:reactionId', async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ message: 'No thought found with that ID' });
    }
    res.status(200).json(updatedThought);
  } catch (error) {
    res.status(500).json({ message: 'Error removing reaction', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

