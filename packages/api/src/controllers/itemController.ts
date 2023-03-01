import Item from '../models/itemModel';

const getItemList = async (req, res) => {
  try {
    const itemList = await Item.find();
    return res.send(itemList);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ error: 'Failed to get Items' });
  }
};

const getItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    return res.send(item);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ error: 'Failed to get Item' });
  }
};

const createItem = async (req, res) => {
  const item = req.body;
  try {
    const newItem = await Item.create(item);
    return res.send(newItem);
  } catch (err) {
    console.error(err);
    return res.status(400).send({ error: 'Failed to create item' });
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.send(item);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ error: 'Failed to get Item' });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByIdAndDelete(id);
    if (!item) {
      return res.status(400).send({ error: 'Item not found' });
    }
    return res.send('Item deleted');
  } catch (error) {
    console.error(error);
    return res.status(400).send({ error: 'Failed to delete Item, check id' });
  }
};

const controller = {
  getItemList,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};

export default controller;
