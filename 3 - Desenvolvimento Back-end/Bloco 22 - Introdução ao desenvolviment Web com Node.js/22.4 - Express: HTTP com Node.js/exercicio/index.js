const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
    res.json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
    const { name } = req.body;

    res.json({ message: `Hello, ${name}`});
});

app.post('/greetings', (req, res) => {
    const { name, age } = req.body;

    if (age > 17) return res.status(200).json({ message: `Hello, ${name}`});

    res.status(401).json({ message: "Unauthorized"});
});

app.put('/users/:name/:age', (req, res) => {
    const { name, age } = req.params;

    res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', (_req, res) => {
    const simpsons = JSON.parse(fs.readFileSync('./simpsons.js'));
    res.status(200).json(simpsons)
})

app.get('/simpsons/:id', (req, res) => {
    const { id } = req.params;
    const simpsons = JSON.parse(fs.readFileSync('./simpsons.js'));

    const person = simpsons.find(simpsom => simpsom.id === id);

    if (!person) return res.status(404).json({ message: 'simpson not found' } );

    res.status(200).json(person);
});

app.listen('3000', () => {
    console.log('rodando na porta 3000!');
})