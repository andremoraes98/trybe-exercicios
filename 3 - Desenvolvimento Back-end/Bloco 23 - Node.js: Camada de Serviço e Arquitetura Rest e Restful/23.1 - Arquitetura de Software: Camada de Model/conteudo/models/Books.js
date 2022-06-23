const connection = require('./connection.js');

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
};