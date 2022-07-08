const BookService = require('../services/bookServices');

const getAll = async (_req, res) => {
  try {
    const result = await BookService.getAll();

    return res.status(200).json(result);
  } catch(e) {
    console.log(e.message)
    res.status(500).json({ message: "Algo não funcionou . . ."});
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BookService.getById(id);

    return res.status(200).json(result);
  } catch(e) {
    console.log(e.message);
    return e.message === 'book_id not found'
      ? res.status(404).json({ message: "Book not found"})
      : res.status(500).json({ message: "Algo não funcionou . . ."});
  }
};

const create = async (req, res) => {
  try {
    const book = await BookService.validateBook(req.body);
  
    const result = await BookService.create(book);
  
    return res.status(201).json(result);
  } catch(e) {
    console.log(e.message);
    return e.message === 'book_id not found'
      ? res.status(404).json({ message: "Book not found"})
      : res.status(500).json({ message: "Algo não funcionou . . ."});
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.validateBook(req.body);
    const result = await BookService.update(id, book);

    return res.status(201).json(result);
  } catch(e) {
    console.log(e.message);
    return e.message === 'book_id not found'
      ? res.status(404).json({ message: "Book not found"})
      : res.status(500).json({ message: "Algo não funcionou . . ."});
  };
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await BookService.destroy(id);
    return res.status(204).end();
  } catch(e) {
    console.log(e.message);
    return e.message === 'book_id not found'
      ? res.status(404).json({ message: "Book not found"})
      : res.status(500).json({ message: "Algo não funcionou . . ."});
  };
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
};
