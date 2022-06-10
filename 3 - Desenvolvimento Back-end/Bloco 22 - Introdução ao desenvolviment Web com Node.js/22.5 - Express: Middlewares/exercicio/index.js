const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const products = [];

const validateProductNameLength = (req, res, next) => {
  const { productName } = req.body;

  if (productName.length < 4)
    return res.status(400).json({ message: "O campo productName é muito curto!" });

  next();
}

const validateBlankProductName = (req, res, next) => {
  const { productName } = req.body;

  if (!productName)
    return res.status(400).json({ message: "O campo productName é obrigatório!" });

  next();
}

app.post('/sales', [
  validateBlankProductName,
  validateProductNameLength,
  (req, res) => {
    const product = req.body;
  
    products.push(product);
  
    res.status(200).json(products);
  }
]);

app.listen(3000, () => {
  console.log('Ouvindo a porta 3000!');
});