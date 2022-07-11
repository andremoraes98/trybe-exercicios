const SurgeriesService = require('../services/surgeryService');

const getAll = async (req, res) => {
  try {
    const surgeries = await SurgeriesService.getAll();
  
    return res.status(200).json(surgeries);
  } catch(e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Deu ruim' })
  }
};

module.exports = {
  getAll,
};
