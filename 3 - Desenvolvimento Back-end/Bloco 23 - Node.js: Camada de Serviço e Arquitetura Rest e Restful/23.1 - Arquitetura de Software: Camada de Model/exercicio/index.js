const express = require('express');

const Users = require('./model/Users.js');
const { validatePassword } = require('./middlewares.js');

const app = express();

app.use(express.json());

app.get('/user', async (req, res) => {
  const users = await Users.getAll();

  res.status(200).json(users);
});

app.post('/user', validatePassword, async (req, res) => {
  const user = req.body;

  if (!Users.isUserValid(user))
    return res.status(401).json({
      error: true,
      message: "Dados inválidos!"
    });

  const [{ insertId }] = await Users.createUser(user);

  return res.status(201).json({
    id: insertId,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });
});

app.listen(3000, () => {
  console.log('Online na porta 3000!')
});