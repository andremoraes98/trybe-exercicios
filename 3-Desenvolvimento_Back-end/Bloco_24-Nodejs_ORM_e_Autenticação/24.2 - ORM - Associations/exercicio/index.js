const express = require('express');

const PatientsController = require('./controller/patientsController');
const PlansController = require('./controller/plansController');
const SurgeriesController = require('./controller/surgeriesController');

const app = express();
app.use(express.json());

app.get('/patients', PatientsController.getAll);
app.get('/plans', PlansController.getAll);
app.get('/surgeries', SurgeriesController.getAll)

app.listen(3000, () => {
  console.log('rodando na 3000!');
})