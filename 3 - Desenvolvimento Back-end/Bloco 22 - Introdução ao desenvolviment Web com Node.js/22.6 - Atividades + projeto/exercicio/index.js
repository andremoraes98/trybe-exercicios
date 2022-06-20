const express = require('express');
const bodyParser = require('body-parser');
const generateToken = require('./crypto');

const app = express();
app.use(bodyParser.json());

app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body;

  if (username.length <= 3 || password.length < 4 || password.length > 8 || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return res.status(400).json({ "message": "invalid data" });
  }

  res.status(201).json({ "message": "user created" });
});

app.post('/user/login', (req, res) => {
  const { email, password } = req.body;
  const token = generateToken();
  
  if (password.length < 4 || password.length > 8 || typeof password !== 'number' || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return res.status(400).json({ "message": "email or password is incorrect" });
  }

  res.status(200).json({ token });
});

app.listen(3001, () => {
  console.log('Rodando na porta 3001');
});