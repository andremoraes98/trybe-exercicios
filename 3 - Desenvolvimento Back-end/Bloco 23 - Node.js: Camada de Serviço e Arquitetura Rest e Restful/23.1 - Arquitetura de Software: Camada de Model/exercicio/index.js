const express = require('express');

const Users = require('./model/Users.js');

const app = express();

app.use(express.json());

app.get('/user', async (req, res) => {
  const users = await Users.getAll();

  res.status(200).json(users);
});

app.listen(3000, () => {
  console.log('Online na porta 3000!')
});