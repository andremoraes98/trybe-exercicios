const express = require('express');

const Authors = require('./models/Authors');
const Books = require('./models/Books');

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get('/authors', async (_req, res) => {
  try {
    const authors = await Authors.getAll();
  
    res.status(200).json(authors);
  } catch (e) {
    res.status(500).json({ erro: `Algo deu errado por causa de: ${e}`})
  }
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
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

app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const books = await Books.getBooksById(id);
  
    if (!books) return res.status(404).json({ message: 'Not Found'});
  
    res.status(200).json(books);
  } catch(e) {
    res.status(500).json({ error: `Algo deu errado pelo motivo: ${e}`})
  }
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!Books.isBookValid(title, author_id))
    return res.status(404).json({ message: 'Dados inválidos'});
  
  await Books.createBook(title, author_id);

  res.status(201).json({ message: 'Autor criado com sucesso!'});
});

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});