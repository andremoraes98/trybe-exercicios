const errorMiddleware = (erro, _req, res, next) => {
  const { name, message } = erro;

  if (!name) return res.status(500).json({ message });

  next();
}

module.exports = errorMiddleware;
