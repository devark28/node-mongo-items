import express from 'express';
import ItemModel from './item.model.js';
import mongoose from "mongoose";

const app = express();
app.use(express.json());

await mongoose.connect('mongodb://localhost/items_db');

app.get('/items', async (req, res) => {
  const items = await ItemModel.find({});
  return res.json(items.length ? items : 'No items found');
});

app.get('/items/:id', async (req, res) => {
  const item = await ItemModel.findOne({
    _id: req.params.id,
  });
  return res.json(item ? item : 'No item found');
});

app.post('/items', async (req, res) => {
  try {
    return res.json(
      await ItemModel.create({
        ...req.body,
      })
    );
  } catch (err) {
    return res.json(err.message);
  }
});

app.put('/items/:id', async (req, res) => {
  try {
    const result = await ItemModel.updateOne({
      _id: req.params.id,
    }, {
      ...req.body
    });
    return res.json(result.modifiedCount ? 'Updated successfully' : result.matchedCount ? 'Item fields have same data' : 'No Item found');
  } catch (err) {
    return res.json(err.message);
  }
});

app.delete('/items/:id', async (req, res) => {
  try {
    const result = await ItemModel.deleteOne({
      _id: req.params.id,
    });
    return res.json(result.deletedCount ? 'Deleted successfully' : 'No Item found');
  } catch (err) {
    return res.json(err.message);
  }
});

app.listen(3000, () => {
  console.log('Server online...')
});