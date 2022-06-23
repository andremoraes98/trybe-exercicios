const connection = require('./connection.js');

const getBooksByAuthorId = (authorId) => {

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