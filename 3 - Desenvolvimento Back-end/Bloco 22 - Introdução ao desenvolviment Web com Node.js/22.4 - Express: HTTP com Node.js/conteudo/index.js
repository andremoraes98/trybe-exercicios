const express = require('express');

const app = express();

const recipe = [
    { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
    { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
    { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
  ];

app.get('/recipe', (_res, req) => {
    req.json(recipe);
});

app.listen('3000', () => {
    console.log('App listening on port 3000.')
});