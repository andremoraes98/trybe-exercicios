const express = require('express');

const MovieController = require('./controllers/movieController.js');
const app = express();

app.use(express.json());

app.post('/movies/post', MovieController.create);

app.listen(3000, () => {
  console.log('Aplicação rodando na 3000!')
})