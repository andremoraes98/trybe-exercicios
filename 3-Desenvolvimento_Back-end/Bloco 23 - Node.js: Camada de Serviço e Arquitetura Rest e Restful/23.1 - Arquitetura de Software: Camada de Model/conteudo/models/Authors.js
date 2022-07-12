const connection = require('./connection.js');

const serialize = (author) => {
  return {
    id: author.id,
    firstName: author.first_name,
    middleName: author.middle_name,
    lastName: author.last_name,
  }
}

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');
  
  return {
  id,
  firstName,
  middleName,
  lastName,
  fullName,
  };
  };

const getAll = async () => {
  const [ authors ] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors'
  );

  return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
  getAll,
};