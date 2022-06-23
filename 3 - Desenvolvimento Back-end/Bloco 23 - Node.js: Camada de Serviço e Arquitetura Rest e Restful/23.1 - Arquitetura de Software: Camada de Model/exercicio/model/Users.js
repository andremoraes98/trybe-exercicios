const connection = require('./connection.js');

const serialize = (user) => {
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    password: user.password,
  }
};

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT id, first_name, last_name, email, password FROM model_example.users'
  );

  return users.map(serialize);
};

const isUserValid = ({ firstName, lastName, email, password }) => {
  if (!firstName || typeof firstName !== 'string') return false; 
  if (!lastName || typeof lastName !== 'string') return false; 
  if (!email || typeof email !== 'string') return false; 
  if (!password || typeof password !== 'string') return false;
  return true 
};

const createUser = async ({ firstName, lastName, email, password }) => {
  const status = connection.execute(
    'INSERT INTO model_example.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  );

  return status;
};

const getUserById = async (id) => {
  const user = await connection.execute(
    'SELECT id, first_name, last_name, email, password FROM model_example.users WHERE id = ?',
    [id]
  );

  return user[0].map(serialize);
};

module.exports = {
  getAll,
  isUserValid,
  createUser,
  getUserById
};
