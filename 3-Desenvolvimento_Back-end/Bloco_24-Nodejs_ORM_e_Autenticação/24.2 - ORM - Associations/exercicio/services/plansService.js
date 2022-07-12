const { plans } = require('../models')

const getAll = async () => {
  const result = await plans.findAll();
  
  return result;
};

module.exports = {
  getAll,
};
