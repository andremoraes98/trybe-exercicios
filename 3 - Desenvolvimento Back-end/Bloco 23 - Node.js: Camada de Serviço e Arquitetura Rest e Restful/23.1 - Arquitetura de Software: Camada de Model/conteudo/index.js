const express = require('express');

const Authors = require('./models/Authors');
const Books = require('./models/Books');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/authors', async (_req, res) => {
  try {
    const authors = await Authors.getAll();
  
    res.status(200).json(authors);
  } catch (e) {
    res.status(500).json({ erro: `Algo deu errado por causa de: ${e}`})
  }
});

app.get('/books/search', async (req, res) => {
  try {
    const { author_id } = req.query;
    const books = await Books.getBooksByAuthorId(Number(author_id));

    res.status(200).json(books);
  } catch(e) {
    res.status(500).json({ erro: `Algo deu errado por causa de: ${e}`})
  }
});

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});