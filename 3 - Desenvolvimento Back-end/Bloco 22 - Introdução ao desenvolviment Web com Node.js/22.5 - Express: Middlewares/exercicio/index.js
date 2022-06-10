const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const products = [];

const validateProductNameLength = (req, res, next) => {
  const { productName } = req.body;

  if (productName.length < 4) {
    res.status(400).json({ message: "O campo productName é muito curto!" });
    return
  }

  next();
}

const validateBlankProductName = (req, res, next) => {
  const { productName } = req.body;

  if (!productName) {
    res.status(400).json({ message: "O campo productName é obrigatório!" });
    return
  }

  next();
}

const validateBlankinfo = (req, res, next) => {
  const { infos } = req.body;

  if (!infos) {
    res.status(400).json({ message: "O campo infos é obrigatório!" });
    return 
  }

  next();
}

const validateDate = (req, res, next) => {
  const { infos : { saleDate } } = req.body;

  if (!saleDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)) {
    res.status(400).json({ message: "Formato da saleDate é inválido!" });
    return
  }

  next();
} 

app.post('/sales', [
  validateBlankProductName,
  validateBlankinfo,
  validateProductNameLength,
  validateDate,
  (req, res) => {
    const product = req.body;
  
    products.push(product);
  
    res.status(200).json(products);
  }
]);

app.listen(3000, () => {
  console.log('Ouvindo a porta 3000!');
});