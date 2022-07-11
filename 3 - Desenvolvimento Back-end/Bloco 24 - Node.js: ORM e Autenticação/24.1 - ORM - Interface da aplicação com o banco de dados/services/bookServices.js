const Joi = require('joi');
const { books: BooksModel } = require('../models');

const validateBook = async (book) => {
  const schema = Joi.object({
    title: Joi.string().required().max(255),
    author: Joi.string().required().max(255),
    pageQuantity: Joi.number().integer().required().positive(),
  });

  const result = await schema.validateAsync(book);
  return result;
};

const getAll = async () => {
  const result = await BooksModel.findAll();

  return result;
};

const getById = async (id) => {
  const result = await BooksModel.findOne({
    where: {
      id,
    }
  });

  if (!result) throw new Error('book_id not found');

  return result;
};

const create = async (book) => {
  const result = await BooksModel.create(book);

  return result.toJSON();
};

const update = async (id, book) => {
  const result = await getById(id);

  await BooksModel.update(book, {
    where: {
      id,
    }
  });


  return result;
}

const destroy = async (id) => {
  await getById(id);
  await BooksModel.destroy({
    where: {
      id,
    }
  });

  return null;
};

module.exports = {
  getAll,
  getById,
  create,
  validateBook,
  update,
  destroy,
};