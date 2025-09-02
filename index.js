import express from 'express';
import ItemModel from './item.model.js';
import mongoose from "mongoose";

const app = express();
app.use(express.json());

await mongoose.connect('mongodb://localhost/items_db');

app.get('/items', async (req, res) => {
  const items = await ItemModel.find();
  return res.json(items);
});

app.get('/items/:id', async (req, res) => {
  const item = await ItemModel.findOne({
    _id: req.params.id,
  });
  if (!item) {
    return res.status(404).json({message: 'No item found'});
  }
  return res.json(item);
});

app.post('/items', async (req, res) => {
  try {
    const item = await ItemModel.create({
      ...req.body,
    });
    return res.json(item);
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

app.put('/items/:id', async (req, res) => {
  try {
    const result = await ItemModel.updateOne({
      _id: req.params.id,
    }, {
      ...req.body
    });
    if (!result.modifiedCount) {
      if (!result.matchedCount) {
        return res.status(400).json({message: 'No Item found'});
      }
      return res.json({message: 'Item fields have same data'});
    }
    return res.json({message: 'Updated successfully'});
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

app.delete('/items/:id', async (req, res) => {
  try {
    const result = await ItemModel.deleteOne({
      _id: req.params.id,
    });
    if (!result.deletedCount) {
      return res.json({message: 'No Item found'});
    }
    return res.json({message: 'Deleted successfully'});
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

app.listen(3000, () => {
  console.log('Server online...')
});