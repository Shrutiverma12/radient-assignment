import mongoose from 'mongoose';
import { DEV_DB_URL } from './serverConfig.js';

export default async function connectDB() {
  try {
    await mongoose.connect(DEV_DB_URL);
    console.log('Connected to mongoDB');
  } catch (error) {
    console.log('Something went wrong while connecting to MongoDB');
    console.log(error);
  }
}
