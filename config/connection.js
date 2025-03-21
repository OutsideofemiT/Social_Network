// config/connection.js
import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourDatabaseName';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected to', connectionString);
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

export default mongoose.connection;
