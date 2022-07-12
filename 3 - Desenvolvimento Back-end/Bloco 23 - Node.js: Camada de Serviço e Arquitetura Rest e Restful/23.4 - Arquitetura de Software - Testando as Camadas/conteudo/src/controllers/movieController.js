const MovieService = require('../services/movieService.js');

const create = async (req, res) => {
  const { title, directBy, releaseYear } = req.body;

  const movie = await MovieService.create({ title, directBy, releaseYear });

  if (!movie) return res.status(400).send('Dados Inválidos');

  res.status(201).send('Filme criado com sucesso!');
};

module.exports = {
  create,
};
