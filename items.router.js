import {Router} from 'express';
import ItemModel from "./item.model.js";

const router = Router();

router.get('/', async (req, res) => {
  const items = await ItemModel.find({});
  return res.json(items);
});

router.get('/:id', async (req, res) => {
  const item = await ItemModel.findOne({
    _id: req.params.id,
  });
  if (!item) {
    return res.status(404).json({message: 'No item found'});
  }
  return res.json(item);
});

router.post('/', async (req, res) => {
  try {
    const item = await ItemModel.create({
      ...req.body,
    });
    return res.json(item);
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
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

export default router;
