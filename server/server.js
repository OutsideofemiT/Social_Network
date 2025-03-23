import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/index.js'; // Top-level route aggregator

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

// Use your top-level routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
