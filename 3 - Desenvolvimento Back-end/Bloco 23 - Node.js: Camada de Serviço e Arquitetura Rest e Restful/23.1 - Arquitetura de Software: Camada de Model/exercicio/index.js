const express = require('express');

const Users = require('./model/Users.js');

const app = express();

app.use(express.json());

app.post('/user', (req, res) => {
  const {} = req.body;
});

app.listen(3000, () => {
  console.log('Online na porta 3000!')
});