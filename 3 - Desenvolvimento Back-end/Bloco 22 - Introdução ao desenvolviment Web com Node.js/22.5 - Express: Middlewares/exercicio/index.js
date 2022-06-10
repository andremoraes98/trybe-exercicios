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

const validateBlankInfo = (req, res, next) => {
  const { infos } = req.body;

  if (!infos) {
    res.status(400).json({ message: "O campo infos é obrigatório!" });
    return 
  }

  next();
}

const validateBlankDate = (req, res, next) => {
  const { infos: { saleDate } } = req.body;

  if (!saleDate) {
    res.status(400).json({ message: "O campo saleDate é obrigatório!" });
    return 
  }

  next();
}

const validateBlankWarrantyPeriod = (req, res, next) => {
  const { infos: { warrantyPeriod } } = req.body;

  if (!warrantyPeriod) {
    res.status(400).json({ message: "O campo warrantyPeriod é obrigatório!" });
    return 
  }

  next();
}

const validateDate = (req, res, next) => {
  const { infos : { saleDate } } = req.body;

  if (!saleDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)) {
    res.status(400).json({ message: "O campo saleDate não é uma data válida!" });
    return
  }

  next();
}

const validateWarrantyPeriod = (req, res, next) => {
  const { infos : { warrantyPeriod } } = req.body;

  if (warrantyPeriod > 3 || warrantyPeriod < 1) {
    res.status(400).json({ message: "O campo warrantyPeriod não é um período válido!" });
    return
  }

  next();
}

app.post('/sales', [
  validateBlankProductName,
  validateBlankInfo,
  validateBlankDate,
  validateBlankWarrantyPeriod,
  validateProductNameLength,
  validateDate,
  validateWarrantyPeriod,
  (req, res) => {
    const product = req.body;
  
    products.push(product);
  
    res.status(201).json({ "message": "Venda cadastrada com sucesso" });
  }
]);

app.listen(3000, () => {
  console.log('Ouvindo a porta 3000!');
});