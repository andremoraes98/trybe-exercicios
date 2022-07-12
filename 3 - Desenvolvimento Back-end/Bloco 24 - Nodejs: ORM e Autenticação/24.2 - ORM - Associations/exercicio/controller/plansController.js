const PlansServices = require('../services/plansService');

const getAll = async (_req, res) => {
  try {
    const result = await PlansServices.getAll();
  
    return res.status(200).json(result);
  } catch(e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Deu ruim' })
  }
};

module.exports = {
  getAll,
};
