const connection = require('./connection.js');

const serialize = (book) => {
  return {
    id: book.id,
    title: book.title,
    authorId: book.author_id,
  }
}

const getBooksById = async (id) => {
  const [ books ] = await connection.execute(
    `SELECT id, title, author_id FROM model_example.books WHERE id = ?`,
    [id]
  );

  if (books.length === 0) return null;
  
  return books.map(serialize)[0];
};

const getBooksByAuthorId = async (authorId) => {
  const [ books ] = await connection.execute(
    `SELECT id, title, author_id FROM model_example.books WHERE author_id = ${authorId}`
  );

  return books;
};

const getAll = async () => {
  const [ books ] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books'
  );

  return books;
};

const isBookValid = (title, authorId) => {
  if (!title || typeof title !== 'string') return false;
  if (!authorId || typeof authorId !== 'number') return false;
  return true;
};

const createBook = async (title, authorId) => await connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
  [title, authorId]
);

module.exports = {
  getAll,
  getBooksByAuthorId,
  getBooksById,
  isBookValid,
  createBook,
};