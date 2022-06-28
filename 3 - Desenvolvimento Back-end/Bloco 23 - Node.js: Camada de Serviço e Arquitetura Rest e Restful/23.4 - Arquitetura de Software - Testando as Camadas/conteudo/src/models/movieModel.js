const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear}) => {
  const sql = 'INSERT INTO movies (title, directed_by, release_year) VALUES (?, ?, ?)';

  const [result] = await connection.query(sql, [title, directedBy, releaseYear]);

  return {
    id: result.insertId,
  }
}

module.exports = {
  create,
};
