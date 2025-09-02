import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import itemsRouter from './items.router.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/items', itemsRouter);

await mongoose.connect(process.env.MONGO_URI);

app.listen(3000, () => {
  console.log('Server online...')
});
