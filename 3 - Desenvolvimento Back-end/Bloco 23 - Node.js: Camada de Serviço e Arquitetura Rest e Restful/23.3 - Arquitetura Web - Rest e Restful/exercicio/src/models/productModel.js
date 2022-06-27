const connection = require('./connection');

const add = async (name, brand) => {
  try {
    const sql = 'INSERT INTO products (name, brad) VALUES (?, ?)';
    const [result] = await connection.query(sql, [name, brand]);

    return { id: result.insertId, name, brand };
  } catch (error) {
    console.error(error);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const sql = 'SELECT * FROM products'
    const [rows] = await connection.query(sql);
    return rows;
  } catch (error) {
    console.error(error);
    return process.exit(1);    
  }
};

const getById = async (id) => {
  try {
    const sql = 'SELECT * FROM products WHERE id = ?';
    const [result] = connection.query(sql, [id]);

    if (!result.length) return null;

    return result;
  } catch (error) {
    console.error(error);
    return process.exit(1);    
  }
};

const update = async (id, name, brand) => {
  try {
    const sql = 'UPDATE products SET name = ?, brand = ? WHERE id = ?';
    const [result] = connection.query(
      sql,
      [name, brand, id]
    );
    return result;
  } catch (error) {
    console.error(error);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const sql = 'DELETE FROM products WHERE id = ?'
    const product = await getById(id);

    if (!product) return {};

    await connection.query(sql, [id]);
  } catch (error) {
    console.error(error);
    return process.exit(1);
  }
}

module.exports = {
  add,
  getAll,
  getById,
  update,
  exclude,
}