// data/seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Thought from '../models/Thought.js';

dotenv.config();

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkDB';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', async () => {
  console.log('Connected to MongoDB for seeding...');

  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Create sample users
    const users = await User.insertMany([
      { username: 'alice', email: 'alice@example.com' },
      { username: 'bob', email: 'bob@example.com' },
    ]);

    // Create sample thoughts linked to users
    const thoughts = await Thought.insertMany([
      {
        thoughtText: 'This is a thought by Alice',
        username: 'alice',
        userId: users[0]._id,
      },
      {
        thoughtText: 'This is a thought by Bob',
        username: 'bob',
        userId: users[1]._id,
      },
    ]);

    console.log('Seeding successful!');
  } catch (err) {
    console.error('Error during seeding:', err);
  } finally {
    mongoose.connection.close();
  }
});
