const express = require('express');
const ProductModel = require('../models/productModel.js');

const router = express.Router();

router.get('/list', async (_req, res) => {
  const products = await ProductModel.getAll();
  return res.status(200).json(products);
});

router.get('/list/:id', async (req, res) => {
  const { id } = req.params;

  const product = await ProductModel.getById(id);

  return res.status(200).json(product);
});

router.post('/add', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  return res.status(201).json(newProduct);
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  const product = await ProductModel.exclude(id);

  return res.status(204);
});

router.put('/update/:id', async (req, res) => {
  const { name, brand } = req.body;
  const { id } = req.params;

  const product = await ProductModel.update(id, name, brand);

  return res.status(201).json(product);
});

module.exports = router;