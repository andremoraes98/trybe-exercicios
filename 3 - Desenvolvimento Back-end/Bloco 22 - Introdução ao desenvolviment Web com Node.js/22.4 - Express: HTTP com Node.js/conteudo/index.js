const express = require('express');
const req = require('express/lib/request');

const app = express();

const recipes = [
    { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
    { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
    { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
  ];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const recipesSorted = [...recipes].sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

const drinksSorted = [...drinks].sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

app.get('/recipes', (_req, res) => {
    res.json(recipes);
});

app.get('/drinks', (_req, res) => {
    res.json(drinks);
});

app.get('/recipes/sorted', (_req, res) => {
    res.json(recipesSorted);
});

app.get('/drinks/sorted', (_req, res) => {
    res.json(drinksSorted);
});

app.get('/recipes/:id', (req, res) => {
    const { id } = req.params;
    const recipe = recipes.find(recipe => recipe.id === Number(id));

    if (!recipe) return res.status(404).json({ message: 'Recipe not found.' })

    res.status(200).json(recipe);
});

app.get('/drinks/:id', (req, res) => {
    const { id } = req.params;
    const drink = drinks.find(drink => drink.id === Number(id));

    if (!drink) return res.status(404).json({ message: 'Recipe not found.' })

    res.status(200).json(drink);
});

app.listen('3000', () => {
    console.log('App listening on port 3000.')
});