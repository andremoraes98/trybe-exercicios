const connection = require('./connection.js');

const serialize = (user) => {
  return {
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    password: user.password,
  }
}

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT id, first_name, last_name, email, password FROM model_example.users'
  );

  return users.map(serialize);
};

module.exports = {
  getAll,
};
