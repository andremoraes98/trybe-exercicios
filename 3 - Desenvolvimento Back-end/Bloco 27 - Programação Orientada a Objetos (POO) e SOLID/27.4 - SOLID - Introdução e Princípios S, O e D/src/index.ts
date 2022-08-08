/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from 'express';
import getPlants from './controller/Plants';

const app = express();

app.use(express.json());

app.get('/plants', getPlants);

app.listen(3000, () => {
  console.log('Rodando na 3000');
});