import express from 'express';
import mongoose from "mongoose";
import itemsRouter from './items.router.js'

const app = express();
app.use(express.json());
app.use('/items', itemsRouter);

await mongoose.connect('mongodb://localhost/items_db');

app.listen(3000, () => {
  console.log('Server online...')
});