import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import dayjs from 'dayjs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
