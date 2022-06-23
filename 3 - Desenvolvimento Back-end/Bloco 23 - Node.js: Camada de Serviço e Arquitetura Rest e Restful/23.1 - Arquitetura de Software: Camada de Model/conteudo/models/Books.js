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

module.exports = {
  getAll,
  getBooksByAuthorId,
  getBooksById,
};