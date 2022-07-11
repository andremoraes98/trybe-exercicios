const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const BookController = require('./controller/bookController');
const BookMiddlewares = require('./middlewares/errorMiddleware');

app.use(express.json());
app.use(BookMiddlewares);

app.get('/books', BookController.getAll);

app.get('/books/:id', BookController.getById);

app.post('/books', BookController.create);

app.put('/books/:id', BookController.update);

app.delete('/books/:id', BookController.destroy)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));