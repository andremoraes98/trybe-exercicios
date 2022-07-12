const { Surgeries } = require('../models');

const getAll = async () => {
  const surgeries = await Surgeries.findAll();

  return surgeries;
};

module.exports = {
  getAll,
}