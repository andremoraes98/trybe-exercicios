const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization.length !== 12 || !/[a-zA-Z0-9]+/.test(authorization)) {
    res.status(401).json({ "message": "invalid token" });
  }

  next();
}

app.get('/btc/price', validateToken, (req, res) => {
  const { authorization } = req.headers;

  res.status(200).json({ authorization });
});

app.listen(3001, () => {
  console.log('Rodando na porta 3001!')
})